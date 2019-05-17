import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeContainer from "./Home";
import ResultsDash from "./ResultsDash";
import { fetchGif, HOME, DASH } from "../state/actions";
import "./Container.css";

class Container extends React.Component {
  componentDidMount = () =>
    this.props.dispatch(fetchGif({ searchTerm: "game+of+thrones", weird: 0 }));

  render() {
    return (
      <div id="container">
        <div id="app-header">Weirdness Calculator</div>
        {this.props.location === HOME ? <HomeContainer /> : <ResultsDash />}
      </div>
    );
  }
}

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.oneOf([HOME, DASH]).isRequired
};

export default connect(
  state => ({ location: state.naiveRouting.location }),
  dispatch => ({ dispatch })
)(Container);
