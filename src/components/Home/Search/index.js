import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { updateSearch } from "../../../state/actions";

const Search = props => {
  const [search, update] = useState("");
  const handleChange = val => update(val);

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
            value={search}
            onChange={e => handleChange(e.target.value)}
            variant="outlined"
          />
          <Button
            onClick={() => {
              props.dispatch(updateSearch(search));
              handleChange("");
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => ({ dispatch })
)(Search);
