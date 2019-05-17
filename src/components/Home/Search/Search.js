import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { updateSearch, fetchGif } from "../../../state/actions";
import "./Search.css";

const Search = props => {
  const [search, update] = useState("");
  const handleChange = val => update(val);

  return (
    <React.Fragment>
      <div id="intro">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          mattis maximus dui vel faucibus. Nam id rhoncus dui. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </div>
        <div>
          Ut vestibulum tempor iaculis. Aenean convallis, est non scelerisque
          pulvinar, mi nisi mattis nisi, vel volutpat leo arcu congue nibh. Sed
          elementum eleifend quam a hendrerit. Nam luctus dolor enim, rutrum
          cursus odio luctus eu.
        </div>
      </div>
      <div id="search-bar-container">
        <div id="search-bar">
          <TextField
            value={search}
            onChange={e => handleChange(e.target.value)}
            variant="outlined"
          />
          <Button
            variant={"contained"}
            onClick={() => {
              props.dispatch(updateSearch(search));
              props.dispatch(
                fetchGif({ searchTerm: search, weird: props.weird })
              );
              handleChange("");
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  weird: PropTypes.number.isRequired
};

export default connect(
  state => ({ weird: state.weird }),
  dispatch => ({ dispatch })
)(Search);
