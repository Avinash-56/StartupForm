import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AdminNavBar from "../layout/NavBarAdmin";
import { getAllStartups } from "../../actions/startup";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

const AdminDashboard = ({ getAllStartups, loading }) => {
  useEffect(() => {
    getAllStartups();
  }, [getAllStartups]);
  return (
    <div>
      <AdminNavBar />
      {loading ? (
        <Spinner />
      ) : (
        <h1 className ='admin-homeh1'>
          Hello there, Please Click on the startups button to view ALL Startups
        </h1>
      )}
    </div>
  );
};

AdminDashboard.propTypes = {};

const mapStateToProps = (state) => ({
  startup: state.startup,
  loading: state.startup.loading,
});
export default connect(mapStateToProps, { getAllStartups })(AdminDashboard);
