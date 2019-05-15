import React from "react";
import Search from "./Search";
import Result from "./Result";
import "./index.css";

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
      <div id="liked-container">d</div>
    </div>
  );
};

export default Container;
