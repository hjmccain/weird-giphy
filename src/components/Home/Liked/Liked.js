import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Gif from "../../Gif/Gif";
import { map } from "ramda";
import {
  updateFavorites,
  REMOVE_FAVORITE,
  updateLocation,
  DASH
} from "../../../state/actions";
import "./Liked.css";

const Liked = props => {
  const remainingLikes = 5 - props.favorites.length;
  const gif = gif => (
    <React.Fragment>
      <Gif
        key={gif.id}
        size="m"
        gif={gif}
        onClick={() =>
          props.dispatch(updateFavorites({ type: REMOVE_FAVORITE, gif }))
        }
      />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <h2>YOUR LIKED GIFS</h2>
      <div id="favorite-gifs">{map(fav => gif(fav), props.favorites)}</div>
      <Button
        variant={"contained"}
        disabled={!!remainingLikes}
        onClick={() => props.dispatch(updateLocation(DASH))}
      >
        How weird am I?
      </Button>
      <div id="counter">
        {remainingLikes
          ? `You need to "like" ${remainingLikes} more
        ${
          remainingLikes === 1 ? "gif" : "gifs"
        } before you can calculate your score.`
          : "Calculate your score!"}
      </div>
    </React.Fragment>
  );
};

Liked.propTypes = {
  dispatch: PropTypes.func.isRequired,
  favorites: PropTypes.array
};

export default connect(
  state => ({
    favorites: state.gifs.favorites
  }),
  dispatch => ({ dispatch })
)(Liked);
