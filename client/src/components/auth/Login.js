import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { loadUser, userLogin, adminLogin } from "../../actions/auth";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

const Login = ({ loadUser, userLogin, adminLogin , location}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
      e.preventDefault()
    if (location.pathname == "/login") {
        userLogin(email, password)
    } else {
        adminLogin(email, password)
    
    }
  };
  return (
    <div>
      <Form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Navbar.Brand className='login-back btn btn-secondary' href="/">Home</Navbar.Brand>

      </Form>
    </div>
  );
};

Login.propTypes = {
    loadUser :PropTypes.func.isRequired,
    adminLogin: PropTypes.func.isRequired,
    userLogin: PropTypes.func.isRequired,
};

const mapActionToProps = {
  loadUser,
  adminLogin,
  userLogin,
};

export default withRouter(connect(null, mapActionToProps)(Login));
