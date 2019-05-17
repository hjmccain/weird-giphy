import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Gif = props => {
  return (
    <img
      src={props.gif.url}
      className={`${props.size} gif`}
      alt={"Replace with real alt text"}
    />
  );
};

Gif.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]).isRequired,
  gif: PropTypes.object
};

export default Gif;
