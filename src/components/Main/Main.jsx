import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EmpRow from "./EmpRow";
import API from "../../utils/API";

class Main extends Component {
  state = {
    results: {},
  };
  render() {
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
          <EmpRow />
          <EmpRow />
          <EmpRow />
        </Container>
      </main>
    );
  }
}

export default Main;
