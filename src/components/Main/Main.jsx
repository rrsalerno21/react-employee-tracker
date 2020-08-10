import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EmpRow from "./EmpRow";
import API from "../../utils/API";

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
    };
  }

  componentDidMount() {
    API.getUsers().then((res) => this.setState({ users: res.results }));
  }

  // Add Sorting Method for Name (bubble sort)

  render() {
    const { users } = this.state;
    return (
      <main>
        <Container fluid className="text-center">
          <h2>Search Bar Here</h2>
        </Container>

        <Container className="mt-3 border">
          <Row className="border-bottom">
            <Col xs lg="2">
              <strong>Picture</strong>
            </Col>
            <Col xs lg="4">
              <strong>Name</strong>
            </Col>
            <Col xs lg="3">
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
