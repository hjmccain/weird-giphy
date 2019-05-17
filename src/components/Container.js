import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeContainer from "./Home";
import { fetchGif } from "../state/actions";
import "./Container.css";

class Container extends React.Component {
  componentDidMount = () =>
    this.props.dispatch(fetchGif({ searchTerm: "game+of+thrones", weird: 0 }));

  render() {
    return (
      <div id="container">
        <div id="app-header">Weirdness Calculator</div>
        <HomeContainer />
      </div>
    );
  }
}

Container.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => ({ dispatch })
)(Container);
