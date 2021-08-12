import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import SearchRender from "./SearchRender";

function SearchHandler({ setSearchResult, searchAllTracks, searchResult }) {
  return (
    <div className="flex-grow-1 position-relative">
      <SearchBar setSearchResult={setSearchResult} />

      {searchResult.length === 0 ? (
        <SearchRender display={"none"} searchAllTracks={searchAllTracks} />
      ) : (
        <SearchRender display={"block"} searchAllTracks={searchAllTracks} />
      )}
    </div>
  );
}

export default SearchHandler;
