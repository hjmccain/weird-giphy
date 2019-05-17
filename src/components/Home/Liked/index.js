import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Images from "./Images";
import { Button } from "@material-ui/core";

const Liked = props => {
  const remainingLikes = 5 - props.favorites.length;

  return (
    <React.Fragment>
      <Images favorites={props.favorites} />
      <Button
        disabled={!!remainingLikes}
        onClick={() => console.log("Find out how weird I am!")}
      >
        How weird am I?
      </Button>
      {remainingLikes ? (
        <div>
          {`You need to "like" ${remainingLikes} more
        ${
          remainingLikes === 1 ? "gif" : "gifs"
        } before you can calculate your score.`}
        </div>
      ) : null}
    </React.Fragment>
  );
};

Liked.propTypes = {
  favorites: PropTypes.array
};

export default connect(state => ({
  favorites: state.favorites
}))(Liked);
