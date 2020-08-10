import React from "react";
import { Row, Col } from "react-bootstrap";

const empRow = (props) => {
  return (
    <React.Fragment>
      <Row className="border-bottom">
        <Col xs lg="2">
          <p>Picture</p>
        </Col>
        <Col xs lg="4">
          <p>Rocky Salerno</p>
        </Col>
        <Col xs lg="3">
          <p>rrsalerno21@gmail.com</p>
        </Col>
        <Col xs lg="3">
          <p>(888) 888-8888)</p>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default empRow;
