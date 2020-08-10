import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./style-header.css";

const Header = () => {
  return (
    <header>
      <Jumbotron fluid className="py-3 header-background">
        <Container className="text-center">
          <h1>Employee Tracker</h1>
        </Container>
      </Jumbotron>
    </header>
  );
};

export default Header;
