import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, CLEAR_ALERT } from "../type";
import React, { useReducer } from "react";

const AlertState = props => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const handleShowAlert = () => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg: "Please enter a user",
        type: "light"
      }
    });
  };

  const clearAlert = () => {
    dispatch({
      type: CLEAR_ALERT,
      payload: null
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        handleShowAlert,
        clearAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
