import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EmpRow from "./EmpRow";
import API from "../../utils/API";
import "./main-style.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentSort: "a-z",
      query: "",
      queryResults: [],
    };
  }

  componentDidMount() {
    API.getUsers().then((res) => {
      const sortedUsers = this.sortByName(res.results, "a-z");
      this.setState({ users: sortedUsers, queryResults: sortedUsers });
    });
  }

  sortByName(users, type) {
    let done = false;

    while (!done) {
      done = true;

      for (let i = 0; i < users.length - 1; i++) {
        let cur = users[i];
        let next = users[i + 1];

        if (cur.name.last[0] > next.name.last[0] && type === "a-z") {
          done = false;
          let temp = next;
          users[i + 1] = cur;
          users[i] = temp;
        } else if (cur.name.last[0] < next.name.last[0] && type === "z-a") {
          done = false;
          let temp = next;
          users[i + 1] = cur;
          users[i] = temp;
        }
      }
    }

    return users;
  }

  handleSort = () => {
    if (this.state.currentSort === "a-z") {
      let lowHighSort = this.sortByName(this.state.queryResults, "z-a");
      this.setState({ queryResults: lowHighSort, currentSort: "z-a" });
    } else if (this.state.currentSort === "z-a") {
      let highLowSort = this.sortByName(this.state.queryResults, "a-z");
      this.setState({ queryResults: highLowSort, currentSort: "a-z" });
    }
  };

  handleQuery = (event) => {
    const query = event.target.value;
    const curUsers = [...this.state.users];
    const filtUsers = curUsers.filter((u) => {
      if (
        u.name.first.includes(query) ||
        u.name.last.includes(query) ||
        u.email.includes(query) ||
        u.cell.includes(query)
      ) {
        return u;
      }
    });

    this.setState({ query, queryResults: filtUsers });
  };

  render() {
    const { queryResults } = this.state;
    return (
      <main>
        <Container fluid className="text-center">
          <input
            type="text"
            placeholder="Search Employees"
            onChange={this.handleQuery}
          />
        </Container>

        <Container fluid="lg" className="mt-3 border">
          <Row className="border-bottom">
            <Col xs md="2">
              <strong>Picture</strong>
            </Col>
            <Col xs md="3">
              <strong onClick={this.handleSort} id="sort-title">
                Name <em>({this.state.currentSort})</em>
              </strong>
            </Col>
            <Col xs md="4">
              <strong>Email</strong>
            </Col>
            <Col xs md="3">
              <strong>Phone</strong>
            </Col>
          </Row>
          {queryResults.map((u) => (
            <EmpRow
              key={u.cell}
              picture={u.picture.thumbnail}
              fName={u.name.first}
              lName={u.name.last}
              email={u.email}
              cell={u.cell}
            />
          ))}
        </Container>
      </main>
    );
  }
}

export default Main;
