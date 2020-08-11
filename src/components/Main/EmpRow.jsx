import React from "react";
import { Row, Col } from "react-bootstrap";

const empRow = (props) => {
  const { picture, fName, lName, email, cell } = props;
  const fullName = `${fName} ${lName}`;
  return (
    <React.Fragment>
      <Row className="border-bottom">
        <Col md lg="2">
          <img src={picture} alt={fullName + " portrait"} />
        </Col>
        <Col md lg="3" className="my-1">
          <span>{fullName}</span>
        </Col>
        <Col md lg="4" className="my-1">
          <span>{email}</span>
        </Col>
        <Col md lg="3" className="my-1">
          <span>{cell}</span>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default empRow;
