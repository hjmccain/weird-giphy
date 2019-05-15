import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const Search = () => {
  return (
    <div>
      <div id="intro">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          mattis maximus dui vel faucibus. Nam id rhoncus dui. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <p>
          Ut vestibulum tempor iaculis. Aenean convallis, est non scelerisque
          pulvinar, mi nisi mattis nisi, vel volutpat leo arcu congue nibh. Sed
          elementum eleifend quam a hendrerit. Nam luctus dolor enim, rutrum
          cursus odio luctus eu.
        </p>
      </div>
      <div id="search-bar-container">
        <div id="search-bar">
          <TextField
            onChange={() => console.log("change")}
            variant="outlined"
          />
          <Button onClick={() => console.log("submit")}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
