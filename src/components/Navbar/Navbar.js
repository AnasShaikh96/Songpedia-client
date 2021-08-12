import React, { useState } from "react";
import SearchHandler from "./Search/SearchHandler.js";
import NavigationTab from "./NavigationTab.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ setSearchResult, searchAllTracks, searchResult }) {
  return (
    <div>
      <nav className="navbar navbar-dark  " style={{ background: "#595959" }}>
        <div className="container">
          <a className="navbar-brand me-5">Songpedia</a>
          <SearchHandler
            className="flex-grow-1"
            setSearchResult={setSearchResult}
            searchAllTracks={searchAllTracks}
            searchResult={searchResult}
          />
        </div>
      </nav>
      <NavigationTab />
    </div>
  );
}

export default Navbar;