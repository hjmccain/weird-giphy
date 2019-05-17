import { filter, uniqBy } from "ramda";
import * as a from "./actions";
import { HOME } from "./actions";
import { combineReducers } from "../../../../Library/Caches/typescript/3.4.5/node_modules/redux";

const initState = {
  weird: 1,
  searchTerm: "game+of+thrones",
  current: null,
  favorites: []
};

const gifs = (state = initState, action) => {
  switch (action.type) {
    case a.SET_CURRENT:
      return {
        ...state,
        current: {
          url: action.current.images.original.url,
          gifId: action.current.id,
          title: action.current.title,
          weird: action.current.weird
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
        favorites: uniqBy(gif => gif.gifId, [...state.favorites, action.gif])
      };
    case a.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: filter(fav => fav !== action.gif, state.favorites)
      };
    case a.CLEAR_ALL:
      return {
        ...state,
        favorites: []
      };
    default:
      return state;
  }
};

const routeState = {
  location: HOME
};

const naiveRouting = (state = routeState, action) => {
  switch (action.type) {
    case a.UPDATE_LOCATION:
      return {
        ...state,
        location: action.location
      };
    default:
      return state;
  }
};

export default combineReducers({ gifs, naiveRouting });
