import React, { useState } from "react";
import Gif from "../../Gif";
import { Slider } from "@material-ui/lab";
import "./Result.css";

const Result = () => {
  const [slider, updateSlider] = useState(0);
  const handleChange = (_, value) => updateSlider(value);

  return (
    <div>
      <h2>Your result</h2>
      <div id="result-container">
        <Gif size="l" />
      </div>
      <div id="slider-container">
        <Slider value={slider} onChange={handleChange} />
        <div id="slider-label">Weirdness: 0</div>
      </div>
    </div>
  );
};

export default Result;
