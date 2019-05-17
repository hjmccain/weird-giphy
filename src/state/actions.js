export const SET_CURRENT = "SET_CURRENT";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const UPDATE_WEIRD = "UPDATE_WEIRD";
export const UPDATE_LOCATION = "UPDATE_LOCATION";

// gifs
export const fetchGif = ({ searchTerm, weird }) => dispatch =>
  fetch(
    `http://api.giphy.com/v1/gifs/translate?s=${searchTerm}&api_key=7EXrkYnwiEJfdy6uEgyp1HW2HZz8plJi&weirdness=${weird}`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then(({ data }) => dispatch(setCurrent({ ...data, weird })))
    .catch(e => console.error("Error fetching gifs. Error:", e));

export const setCurrent = gif => ({
  type: SET_CURRENT,
  current: gif
});

export const updateFavorites = ({ type, gif }) => ({
  type,
  gif
});

export const updateSearch = searchTerm => ({
  type: UPDATE_SEARCH,
  searchTerm
});

export const updateWeird = weird => ({
  type: UPDATE_WEIRD,
  weird
});

// "routing"
export const updateLocation = location => ({
  type: UPDATE_LOCATION,
  location
});
