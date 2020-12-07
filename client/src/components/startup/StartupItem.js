import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import NavBar from '../layout/NavBar'

const StartupItem = ({
  startup: {
    name,
    website,
    stage,
    profit,
    founded,
    bio,
    fOrb,
    address,
    registrationNumber,
    founder,
  },
}) => {
  return (
    <div>
        <NavBar/>
      <Container>
        <Row>
          <Col>
            <h5 className="head">Name:</h5>
          </Col>
          <Col>
            <h5 className="content">{name}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Founder of the comapany:</h5>
          </Col>
          <Col>
            <h5 className="content">{founder}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Website Link:</h5>
          </Col>
          <Col>
            <h5 className="content">{website}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Stage of the Startup:</h5>
          </Col>
          <Col>
            <h5 className="content">{stage}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Profitable?:</h5>
          </Col>
          <Col>
            <h5 className="content">{profit}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Founded on:</h5>
          </Col>
          <Col>
            <h5 className="content">{founded}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Information about the comany:</h5>
          </Col>
          <Col>
            <h5 className="content">{bio}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Funded or Bootstraped?:</h5>
          </Col>
          <Col>
            <h5 className="content">{fOrb}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Address of the Startup:</h5>
          </Col>
          <Col>
            <h5 className="content">{address}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">registrationNumber:</h5>
          </Col>
          <Col>
            <h5 className="content">{registrationNumber}</h5>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default StartupItem;
