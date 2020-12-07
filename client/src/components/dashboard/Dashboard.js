import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import Spinner from "../layout/Spinner";
import { Row, Col, Container } from "react-bootstrap";
import NavBar from "../layout/NavBar";
import { Nav } from "react-bootstrap";
import { getUserStartup } from "../../actions/startup";

const Dashboard = ({ auth: { user, loading }, loadUser }) => {
  useEffect(() => {
    loadUser() 
  }, []);
  useEffect(()=>{
    getUserStartup();
  }, [])
  return (
    <div>
      {loading || user == null ? (
        <Spinner />
      ) : (
        <Fragment>
          <NavBar />
          <br />
          <p className="username">Welcome {user && user.name}</p>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getUserStartup })(
  Dashboard
);
