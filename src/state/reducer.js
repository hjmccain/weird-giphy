import { filter, uniqBy } from "ramda";
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
        current: {
          url: action.current.images.original.url,
          gifId: action.current.id,
          title: action.current.title
        }
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
        favorites: [...state.favorites, action.gif]
      };
    case a.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: filter(fav => fav !== action.gif, state.favorites)
      };
    default:
      return state;
  }
};

export default reducer;
