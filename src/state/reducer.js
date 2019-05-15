import { combineReducers } from "redux";

const initState = {};

const reducer = state => {
  if (typeof state === "undefined") {
    return initState;
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
};

export default combineReducers({ reducer });
