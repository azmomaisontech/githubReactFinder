import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <h1>Not Found</h1>
      <p className="lead">The Page you are looking for doesn't exists....</p>
      <Link className="btn btn-dark btn-sm" to="/">
        Go Back
      </Link>
    </Fragment>
  );
};

export default NotFound;
