import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import Spinner from "../layout/Spinner";
import NavBar from "../layout/NavBar";
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


const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getUserStartup })(
  Dashboard
);
