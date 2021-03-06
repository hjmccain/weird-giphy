import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Gif from "../../Gif/Gif";
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
    <React.Fragment>
      <h2>YOUR RESULT</h2>
      <div id="result-container">
        {props.gif ? <Gif size="l" gif={props.gif} /> : null}
      </div>
      <Button
        variant={"contained"}
        onClick={() =>
          props.dispatch(
            updateFavorites({ type: ADD_FAVORITE, gif: props.gif })
          )
        }
      >
        Like
      </Button>
      <div id="slider-container">
        <Slider value={slider} step={1} max={10} onChange={handleChange} />
        <div id="slider-label">Weirdness: {slider}</div>
      </div>
    </React.Fragment>
  );
};

Result.propTypes = {
  dispatch: PropTypes.func.isRequired,
  gif: PropTypes.object
};

export default connect(
  state => ({
    gif: state.gifs.current,
    searchTerm: state.gifs.searchTerm
  }),
  dispatch => ({ dispatch })
)(Result);
