import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUserStartup } from "../../actions/startup";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import NavBar from "../layout/NavBar";
import StartupForm from "./StartupForm";
import StartupItem from "./StartupItem";

const Startup = ({ startup: { startup, loading }, auth, getUserStartup }) => {
  const [show, changeShow] = useState(false);

  useEffect(() => {
    getUserStartup();
  }, [getUserStartup]);
  return (
    <div>
      {/* {loading ? (
        startup == null(<Spinner />)
      ) : (
        <div>
          <NavBar />
          {startup !== null ? (
            <StartupItem key={startup._id} startup={startup} />
          ) : (
            <h1 className="no-info">
              No information available{" "}
              <Link to='startup/form' onClick={() => changeShow(!show)}>Click here</Link>
            </h1>
          )}
        </div>
      )} */}
      {startup == null && !loading ? (
          <div>
         <NavBar/> 
        <h1 className="no-info">
          No information available{" "}
          <Link to="startup/form" onClick={() => changeShow(!show)}>
            Click here
          </Link>
        </h1>
        </div>
      ) : (
        <StartupItem key={startup._id} startup={startup}></StartupItem>
      )}
    </div>
  );
};

Startup.propTypes = {};

const mapStateToProps = (state) => ({
  startup: state.startup,
  auth: state.auth,
});

export default connect(mapStateToProps, { getUserStartup })(Startup);
