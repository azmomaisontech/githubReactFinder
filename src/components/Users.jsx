import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import GithubContent from "../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContent);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {users.map(user => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

export default Users;
