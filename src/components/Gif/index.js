import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const GifImage = props => {
  return <div className={`${props.size} gif`}>image!</div>;
};

GifImage.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]).isRequired
};

export default GifImage;
