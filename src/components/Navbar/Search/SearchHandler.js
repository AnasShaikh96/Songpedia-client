import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";
import SearchRender from "./SearchRender";
// import GetSearchTracks from "../../../methods/Actions/getSearchTracks";

function SearchHandler() {
  return (
    <div className="flex-grow-1 position-relative">
      <SearchBar />
      <SearchRender />
    </div>
  );
}

export default SearchHandler;
