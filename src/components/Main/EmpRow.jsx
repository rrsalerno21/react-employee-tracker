import React from "react";
import { Row, Col } from "react-bootstrap";

const empRow = (props) => {
  const { picture, fName, lName, email, cell } = props;
  return (
    <React.Fragment>
      <Row className="border-bottom">
        <Col xs lg="2">
          <img src={picture} />
        </Col>
        <Col xs lg="3">
          <p>
            {fName} {lName}
          </p>
        </Col>
        <Col xs lg="4">
          <p>{email}</p>
        </Col>
        <Col xs lg="3">
          <p>{cell}</p>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default empRow;
