import React from "react";
import { Navbar, Button, Form , FormControl, Nav} from "react-bootstrap";
import {logout} from '../../actions/auth'
import {connect } from 'react-redux'

const NavBar = ({logout}) => {
  const onClick = e =>{
   logout()
}


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className='nav-dash' href="/startup">Your Startup</Navbar.Brand>
        <Nav.Link href="/user-dashboard" className= 'home-dash'>Home</Nav.Link>
        <Form inline>
          <Button className = "logout-button btn-danger"
            variant="outline-success"
            onClick={(e) => {
              onClick(e);
            }}
          >
            Logout
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default connect(null, {logout})(NavBar);
