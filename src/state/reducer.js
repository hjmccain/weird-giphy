import { exists } from "ramda";
import * as a from "./actions";

const initState = {
  weird: 1,
  searchTerm: "game+of+thrones",
  current: null,
  favorites: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case a.SET_CURRENT:
      return {
        ...state,
        current: action.current
      };
    case a.UPDATE_SEARCH:
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    case a.UPDATE_WEIRD:
      return {
        ...state,
        weird: action.weird
      };
    case a.UPDATE_FAVORITES: {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
