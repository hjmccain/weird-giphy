import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Gif from "../../Gif";
import { Slider } from "@material-ui/lab";
import "./Result.css";
import {
  updateWeird,
  fetchGif,
  updateFavorites,
  ADD_FAVORITE
} from "../../../state/actions";
import { Button } from "@material-ui/core";

const Result = props => {
  const [slider, updateSlider] = useState(0);
  const handleChange = (_, val) => {
    updateSlider(val);
    props.dispatch(fetchGif({ searchTerm: props.searchTerm, weird: val }));
    props.dispatch(updateWeird(val));
  };

  return (
    <div>
      <h2>Your result</h2>
      <div id="result-container">
        <Gif size="l" currentUrl={props.currentUrl} />
      </div>
      <Button
        onClick={() =>
          props.dispatch(
            updateFavorites({ type: ADD_FAVORITE, url: props.currentUrl })
          )
        }
      >
        Like
      </Button>
      <div id="slider-container">
        <Slider value={slider} step={1} max={10} onChange={handleChange} />
        <div id="slider-label">Weirdness: {slider}</div>
      </div>
    </div>
  );
};

Result.propTypes = {
  dispatch: PropTypes.func.isRequired,
  embedUrl: PropTypes.string
};

export default connect(
  state => ({
    currentUrl: state.current,
    searchTerm: state.searchTerm
  }),
  dispatch => ({ dispatch })
)(Result);
