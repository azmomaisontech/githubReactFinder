import React, { useState, useContext } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");
  const { handleShowAlert, clearAlert } = alertContext;
  const { handleSearch, handleClearUsers, users } = githubContext;

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      handleShowAlert("Please enter user", "light");
      setTimeout(() => {
        clearAlert();
      }, 2000);
    } else {
      handleSearch(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button onClick={handleClearUsers} className="btn btn-light btn-block">
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
