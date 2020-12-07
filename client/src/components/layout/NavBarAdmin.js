import React from "react";
import { Navbar, Button, Form , FormControl, Nav} from "react-bootstrap";
import {logout} from '../../actions/auth'
import {connect } from 'react-redux'
import {getAllStartups} from '../../actions/startup'

const AdminNavBar = ({logout, getAllStartups}) => {
  const onClick = e =>{
   logout()
}

const onStartups = e =>{
    getAllStartups()
}

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className='nav-dash' href="/startups" onClick={e=>onStartups(e)}>Startups</Navbar.Brand>
        <Nav.Link href="/admin-dashboard" className= 'home-dash'>Home</Nav.Link>
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

export default connect(null, {logout})(AdminNavBar);
