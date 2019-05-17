import React from "react";
import Search from "./Search/Search";
import Result from "./Result/Result";
import "./index.css";
import Liked from "./Liked/Liked";

const Container = () => {
  return (
    <div id="home">
      <div id="search-container" className="container">
        <div id="search" className="sub-container">
          <Search />
        </div>
        <div id="result" className="sub-container">
          <Result />
        </div>
      </div>
      <div id="liked-container" className="container">
        <div id="liked" className="sub-container">
          <Liked />
        </div>
      </div>
    </div>
  );
};

export default Container;
