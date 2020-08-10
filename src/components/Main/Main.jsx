import React, { Component } from "react";
import { Container } from "react-bootstrap";
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

        <Container fluid className="text-center mt-3 border">
          <p>Search Results Here</p>
        </Container>
      </main>
    );
  }
}

export default Main;
