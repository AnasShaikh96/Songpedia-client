import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GetSearchTracks from "../../../methods/Actions/getSearchTracks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const values = GetSearchTracks();
  const setSearchResult = values.setSearchResult;
  return (
    <div className="input-group d-flex flex-row ">
      <input
        type="text"
        className="form-control m-0"
        onChange={(e) => {
          setSearchResult(e.target.value);
        }}
        placeholder="Search for Artists,Songs or Albums"
      />
      <span className="input-group-text bg-light" id="basic-addon2">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
}

export default SearchBar;
