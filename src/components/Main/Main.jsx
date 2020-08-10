import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EmpRow from "./EmpRow";
import API from "../../utils/API";
import "./main-style.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: { first: "LOADING...", last: "" },
          email: "",
          cell: "",
          picture: { thumbnail: "" },
        },
      ],
      currentSort: "a-z",
    };
  }

  componentDidMount() {
    API.getUsers().then((res) => {
      const sortedUsers = this.sortByName(res.results, "a-z");
      this.setState({ users: sortedUsers });
    });
  }

  // Add Sorting Method for Name (bubble sort)
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
      let lowHighSort = this.sortByName(this.state.users, "z-a");
      this.setState({ users: lowHighSort, currentSort: "z-a" });
    } else if (this.state.currentSort === "z-a") {
      let highLowSort = this.sortByName(this.state.users, "a-z");
      this.setState({ users: highLowSort, currentSort: "a-z" });
    }
  };

  render() {
    const { users } = this.state;
    return (
      <main>
        <Container fluid className="text-center">
          <input type="text" placeholder="Search Employees" />
        </Container>

        <Container className="mt-3 border">
          <Row className="border-bottom">
            <Col xs lg="2">
              <strong>Picture</strong>
            </Col>
            <Col xs lg="3">
              <strong onClick={this.handleSort} id="sort-title">
                Name <em>({this.state.currentSort})</em>
              </strong>
            </Col>
            <Col xs lg="4">
              <strong>Email</strong>
            </Col>
            <Col xs lg="3">
              <strong>Phone</strong>
            </Col>
          </Row>
          {users.map((u) => (
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
