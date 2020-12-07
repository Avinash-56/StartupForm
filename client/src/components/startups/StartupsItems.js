import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const StartupsItems = ({ startup: { user }, id }) => {
  return (
    <div>
      <Row className = 'startrow'>
        <Col>
          <Link to={`/startups/${id}`} className='shead'> {user.name} </Link>
        </Col>
        <Col className='sbody '>{user.email}</Col>
      </Row>
    </div>
  );
};


export default StartupsItems;
