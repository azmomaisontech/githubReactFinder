import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user }) => {
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={user.avatar_url}
        alt="Profile pix"
        style={{ width: "60px" }}
      ></img>
      <p>{user.login}</p>
      <Link to={`/user/${user.login}`} className="btn btn-sm btn-dark">
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
