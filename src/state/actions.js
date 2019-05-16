export const SET_CURRENT = "SET_CURRENT";
export const UPDATE_FAVORITES = "UPDATE_FAVORITES";
export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const UPDATE_WEIRD = "UPDATE_WEIRD";

export const fetchGif = ({ searchTerm, weird }) => dispatch => {
  fetch(
    // todo: remove hardcoded API key
    `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=7EXrkYnwiEJfdy6uEgyp1HW2HZz8plJi&limit=1&weirdness=${weird}`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      if (!res.json().length) {
        throw new Error("Call was successful but no gif was returned.");
      }

      return res.json();
    })
    .then(data => dispatch(setCurrent({ ...data[0], weird })))
    .catch(e => console.error("Error fetching gif(s). Error:", e));
};

export const setCurrent = gif => ({
  type: SET_CURRENT,
  current: gif
});

export const updateFavorites = id => ({
  type: UPDATE_FAVORITES,
  id
});

export const updateSearch = searchTerm => ({
  type: UPDATE_SEARCH,
  searchTerm
});

export const updateWeird = weird => ({
  type: UPDATE_WEIRD,
  weird
});
