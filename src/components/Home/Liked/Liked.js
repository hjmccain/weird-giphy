import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Gif from "../../Gif/Gif";
import { map } from "ramda";
import "./Liked.css";

// DUMMY STUFF
const dummy = () => ({
  url: "https://media1.giphy.com/media/11clOWGCHzWG7C/giphy_s.gif",
  id: Math.floor(Math.random).toString(),
  title: "imma title weeee"
});

const Liked = props => {
  const remainingLikes = 5 - props.favorites.length;
  const gif = gif => (
    <React.Fragment>
      <Gif key={gif.id} size="m" gif={gif} />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <h2>YOUR LIKED GIFS</h2>
      <div id="favorite-gifs">
        {map(fav => gif(fav), [dummy(), dummy(), dummy(), dummy(), dummy()])}
      </div>
      {/* {map(fav => gif(fav), props.favorites)} */}
      <Button
        variant={"contained"}
        disabled={!!remainingLikes}
        onClick={() => console.log("Find out how weird I am!")}
      >
        How weird am I?
      </Button>
      {remainingLikes ? (
        <div id="counter">
          {`You need to "like" ${remainingLikes} more
        ${
          remainingLikes === 1 ? "gif" : "gifs"
        } before you can calculate your score.`}
        </div>
      ) : (
        "Calculate your score!"
      )}
    </React.Fragment>
  );
};

Liked.propTypes = {
  favorites: PropTypes.array
};

export default connect(state => ({
  favorites: state.favorites
}))(Liked);
