import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



const AdminRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, isAdmin },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading || !isAdmin ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoute);
