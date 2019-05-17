import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { map, reduce, divide } from "ramda";
import {
  updateFavorites,
  CLEAR_ALL,
  updateLocation,
  HOME
} from "../../state/actions";
import Gif from "../Gif/Gif";

const ResultsDash = props => {
  const handleClick = () => {
    props.dispatch(updateLocation(HOME));
    props.dispatch(updateFavorites({ type: CLEAR_ALL }));
  };

  const gif = gif => (
    <React.Fragment>
      <Gif key={gif.id} size="m" gif={gif} />
    </React.Fragment>
  );

  const score = gifs =>
    Math.round(divide(reduce((acc, fav) => acc + fav.weird, 0, gifs), 5));

  return (
    <React.Fragment>
      <h1>{`You scored ${score(props.favorites) === 8 ? "an" : "a"} ${score(
        props.favorites
      )} out of 10 on the weirdness scale!`}</h1>
      <div>
        <h2>The GIFs you liked:</h2>
        <div id="favorite-gifs">{map(fav => gif(fav), props.favorites)}</div>
      </div>
      <Button onClick={handleClick}>Start Over</Button>
    </React.Fragment>
  );
};

ResultsDash.propTypes = {
  dispatch: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
};

export default connect(
  state => ({
    favorites: state.gifs.favorites
  }),
  dispatch => ({ dispatch })
)(ResultsDash);
