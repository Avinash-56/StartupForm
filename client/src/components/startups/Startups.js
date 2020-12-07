import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import StartupsItems from "./StartupsItems";
import {Container} from 'react-bootstrap'
import AdminNavbar from '../layout/NavBarAdmin'


const Startups = ({ startup: { startups }, loading }) => {
  return (
    <div>
        <AdminNavbar/>
          { 
          startups.map((startup) => (
            <StartupsItems key={startup._id} id={startup._id} startup={startup} />
          ))
          }
        </div>
  );
};

Startups.propTypes = {};
const mapStateToProps = (state) => ({
  startup: state.startup,
});

export default connect(mapStateToProps)(Startups);
