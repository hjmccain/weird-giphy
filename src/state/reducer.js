import { exists } from "ramda";
import { combineReducers } from "redux";
import { SET_CURRENT, UPDATE_FAVORITES } from "./actions";

const initState = {
  weird: 1,
  searchTerm: "game+of+thrones",
  current: null,
  favorites: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT:
      return {
        ...state,
        current: action.current
      };
    case UPDATE_FAVORITES: {
      return state;
    }
    default:
      return state;
  }
};

export default combineReducers({ reducer });
