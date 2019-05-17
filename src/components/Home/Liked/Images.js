import React from "react";
import PropTypes from "prop-types";
import Gif from "../../Gif";
import { map } from "ramda";

const Images = props => {
  const gif = gif => <Gif size="m" gif={gif} />;
  return map(fav => gif(fav), props.favorites);
};

Images.propTypes = {
  favorites: PropTypes.array
};

export default Images;
