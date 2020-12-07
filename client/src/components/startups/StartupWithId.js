import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getStartup } from "../../actions/startup";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import {Col, Row, Container} from 'react-bootstrap'
import AdminNavbar from '../layout/NavBarAdmin'


const StartupWithId = ({ match, startup, getStartup }) => {
  useEffect(() => {
    getStartup(match.params.id);
  }, [getStartup]);
  return startup == null ? (
    <Spinner />
  ) : (
    <div>
        <AdminNavbar/>
      <Container>
        <Row>
          <Col>
            <h5 className="head">Name:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.name}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Founder of the comapany:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.founder}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Website Link:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.website}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Stage of the Startup:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.stage}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Profitable?:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.profit}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Founded on:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.founded}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Information about the comany:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.bio}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Funded or Bootstraped?:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.fOrb}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">Address of the Startup:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.address}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="head">registrationNumber:</h5>
          </Col>
          <Col>
            <h5 className="content">{startup.registrationNumber}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

StartupWithId.propTypes = {};

const mapStateToProps = (state) => ({
  startup: state.startup.startup,
});

export default connect(mapStateToProps, { getStartup })(StartupWithId);
