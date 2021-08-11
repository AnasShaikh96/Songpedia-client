import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar({
  tracks,
  getArtistAlbums,
  searchResult,
  setSearchResult,
  getSearchTracks,
  searchAllTracks,
}) {
  return (
    <div>
      <nav className="navbar navbar-dark  " style={{ background: "#595959" }}>
        <div className="container ">
          <a className="navbar-brand me-5">Songpedia</a>
          <div className="flex-grow-1 w-50">
            <div className="input-group m-2 ">
              <input
                type="text"
                className="form-control "
                onChange={(e) => {
                  setSearchResult(e.target.value);
                }}
                placeholder="Search for Artists,Songs or Albums"
              />
              <span className="input-group-text bg-light" id="basic-addon2">
                <i class="fas fa search"></i>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="nav justify-content-center  text-light fs-5"
        style={{ background: "#353535" }}
      >
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link link-light " aria-current="page">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light">Old hits</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light">Mood</a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-light ">Radio</a>
          </li>
        </ul>
      </div>
      {/* <Dashboard tracks={tracks} getArtistAlbums={getArtistAlbums} /> */}
      <div>
        {searchAllTracks.map((track) => {
          return (
            <div
              className="d-flex justify-contents-center align-items-center m-2"
              key={track.uri}
            >
              <img src={track.albumUrl} className="" width="100" height="100" />
              <div className="">
                <p className="fw-bold">{track.title}</p>
                <p className="text-muted">{track.artistName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
