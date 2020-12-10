import React from "react";
import Login from "./Login";
// import { loadUser } from "../../actions/auth";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const IncubatorLogin = ({auth: {isAuthenticated, isAdmin}}) => {
    if(isAuthenticated && isAdmin){
        return <Redirect to='/admin-dashboard'/>
 }
 else if(isAuthenticated && !isAdmin){
   return <Redirect to='/user-dashboard'/>
 }
  return (
    <div>
        <h5>Email: admin1@gmail.com </h5>
        <h5>Password: admin123</h5>
      <Login />

      <h3 className='heading'>
        Sign as the the Incubator. You can view all the startups registered on the platform
      </h3>

      {/* <img src={IncubatorLoginImage} className='image'></img> */}
    </div>
  );
};

IncubatorLogin.propTypes = {};

const mapSTateToProps = state =>({
    auth: state.auth
})

export default connect(mapSTateToProps)(IncubatorLogin) ;
