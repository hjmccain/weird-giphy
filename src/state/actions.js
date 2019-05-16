export const SET_CURRENT = "SET_CURRENT";
export const UPDATE_FAVORITES = "UPDATE_FAVORITES";
export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const UPDATE_WEIRD = "UPDATE_WEIRD";

export const fetchGif = ({ searchTerm, weird }) => dispatch =>
  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=7EXrkYnwiEJfdy6uEgyp1HW2HZz8plJi&limit&weirdness=${weird}&limit=1`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then(({ data }) =>
      data.length
        ? dispatch(setCurrent({ ...data[0], weird }))
        : console.error("No gif returned in array.")
    )
    .catch(e => console.error("Error fetching gifs. Error:", e));

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
