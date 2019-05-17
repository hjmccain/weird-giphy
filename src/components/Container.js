import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeContainer from "./Home";
import Header from "./Header";
import { fetchGif } from "../state/actions";

class Container extends React.Component {
  componentDidMount = () =>
    this.props.dispatch(fetchGif({ searchTerm: "game+of+thrones", weird: 0 }));

  render() {
    return (
      <div id="container">
        <Header />
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
