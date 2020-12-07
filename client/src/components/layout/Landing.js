import React , {useEffect}from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {removeAlert} from '../../actions/alert'

const Landing = ({ isAuthenticated, removeAlert }) => {
  useEffect(()=>{
   removeAlert()
  })

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Startup Founder</h1>
          <p className="lead">
            Welcome, we give wings to your ambitions 
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
            <br/>
            <br/>

            <p className="landing-admin">
            Incubator? Please click<Link to='/admin-login'> Here </Link>
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Landing.propTypes = {
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

export default connect(null, {removeAlert})(Landing);
