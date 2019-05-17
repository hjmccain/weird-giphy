import { filter } from "ramda";
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
        current: action.current.images.original.url
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
    case a.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...new Set([...state.favorites, action.url])]
      };
    case a.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: filter(fav => fav != action.url, state.favorites)
      };
    default:
      return state;
  }
};

export default reducer;
