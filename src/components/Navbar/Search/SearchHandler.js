import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import SearchRender from "./SearchRender";

function SearchHandler({ setSearchResult, searchAllTracks, searchResult }) {
  return (
    <div className="flex-grow-1 position-relative">
      <SearchBar setSearchResult={setSearchResult} />
      <SearchRender searchAllTracks={searchAllTracks} />
    </div>
  );
}

export default SearchHandler;
