import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const GifImage = props => {
  return (
    <img
      src={props.currentUrl}
      className={`${props.size} gif`}
      alt={"Replace with real alt text"}
    />
  );
};

GifImage.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]).isRequired,
  currentUrl: PropTypes.string.isRequired
};

export default GifImage;
