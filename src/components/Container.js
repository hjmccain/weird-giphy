import React from "react";
import HomeContainer from "./Home";
import Header from "./Header";

class Container extends React.Component {
  state = {
    gifs: []
  };

  componentDidMount = () => {
    const apiKey = "7EXrkYnwiEJfdy6uEgyp1HW2HZz8plJi";
    const searchTerm = "ryan+gosling";
    const limit = "5";

    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=${limit}`
    )
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res.json();
      })
      .then(({ data }) => {
        this.setState({ gifs: data });
      })
      .catch(e => console.error("Error fetching gifs. Error:", e));
  };

  render() {
    return (
      <div id="container">
        <Header />
        <HomeContainer />
      </div>
    );
  }
}

export default Container;
