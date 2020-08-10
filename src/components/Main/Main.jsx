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
          name: { first: "", last: "" },
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

  render() {
    const { users } = this.state;
    console.log(users[0].cell);
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
          <EmpRow
            picture={users[0].picture.thumbnail}
            fName={users[0].name.first}
            lName={users[0].name.last}
            email={users[0].email}
            phone={users[0].cell}
          />
        </Container>
      </main>
    );
  }
}

export default Main;
