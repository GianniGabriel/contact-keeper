import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERTS } from "../types";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    let isDupe = false;
    state.forEach((alert) => {
      if (alert.msg === msg) {
        isDupe = true;
        return;
      }
    });
    if (!isDupe) {
      dispatch({ type: SET_ALERT, payload: { msg, type, id } });
    }

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, timeout);
  };

  // Remove Alert
  const clearAlerts = () => {
    dispatch({ type: CLEAR_ALERTS });
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
        clearAlerts,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
