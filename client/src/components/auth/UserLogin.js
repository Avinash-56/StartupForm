import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Login from "./Login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { loadUser } from "../actions/auth";

const UserLogin = ({ auth: { isAuthenticated, isAdmin} }) => {
  if(isAuthenticated && isAdmin){
    return <Redirect to='/admin-dashboard'/>
}
else if(isAuthenticated && !isAdmin){
return <Redirect to='/user-dashboard'/>
}
  return (
    <div>
      <Login />
      <h5>Email: test1@gmail.com </h5>
      <h5>Password: 123456</h5>{" "}
      <p>Optional(You can register new user as well)</p>
      
      <h3 className="heading">
        Sign as the the Founder. You can register your startup
      </h3>
      {/* <img src={candidateImage} className='image'></img> */}
    </div>
  );
};

// UserLogin.propTypes = {
// isAuthenticated : PropTypes.bool,
// };
// const mapSTateToProps = state =>({
//     isAuthenticated : state.auth.isAuthenticated
// })

const mapSTateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapSTateToProps)(UserLogin);
