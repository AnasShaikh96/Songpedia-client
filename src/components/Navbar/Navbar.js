import React from "react";
import SearchHandler from "./Search/SearchHandler.js";
import NavigationTab from "./NavigationTab/NavigationTab.js";
import "bootstrap/dist/css/bootstrap.min.css";
import GetSearchTracks from "../../methods/Actions/getSearchTracks";

function Navbar() {
  const values = GetSearchTracks();
  const setSearchResult = values.setSearchResult;
  const searchAllTracks = values.searchAllTracks;
  const searchResult = values.searchResult;

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand me-5 fs-3">Songpedia</a>
          <SearchHandler
            className="flex-grow-1"
            setSearchResult={setSearchResult}
            searchAllTracks={searchAllTracks}
            searchResult={searchResult}
          />
        </div>
      </nav>
      <NavigationTab />
    </>
  );
}

export default Navbar;
