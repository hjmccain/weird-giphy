import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import GifImage from "../../Gif";
import { map } from "ramda";

const Liked = props => {
  const gif = url => <GifImage size="m" currentUrl={url} />;
  return map(fav => gif(fav), props.favorites);
};

Liked.propTypes = {
  favorites: PropTypes.array
};

export default connect(state => ({
  favorites: state.favorites
}))(Liked);
