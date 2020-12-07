import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { register } from "../../actions/auth";
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Navbar} from 'react-bootstrap'


const Register = ({register, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if(isAuthenticated){
      return <Redirect to='/user-dashboard'/>
  }
  const onSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };
  return (
    <div>
      <Form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password(min 8 characters)"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Your Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Navbar.Brand className='login-back btn btn-secondary' href="/">Home</Navbar.Brand>
      </Form>
      <h3 className="heading">
        Sign as the the Founder. You can register your startup
      </h3>
    </div>
  );
};

Register.propTypes = {};

const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, {register})(Register);
