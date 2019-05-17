import React from "react";
import Search from "./Search/Search";
import Result from "./Result/Result";
import "./index.css";
import Liked from "./Liked/Liked";

const Container = () => {
  return (
    <div id="home">
      <div id="search-container">
        <div id="search">
          <Search />
        </div>
        <div id="result">
          <Result />
        </div>
      </div>
      <div id="liked-container">
        <Liked />
      </div>
    </div>
  );
};

export default Container;
