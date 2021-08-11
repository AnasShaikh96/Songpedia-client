import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";

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
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Songpedia</a>
          <div className="d-flex justify-contents-center align-items-center">
            <input
              type="text"
              onChange={(e) => {
                getSearchTracks(e.target.value);
              }}
              placeholder="Search for Artists,Songs or Albums"
            />
            <button className="btn btn-outline-success btn-sm">Search</button>
          </div>
        </div>
      </nav>
      <div className=" bg-dark text-light">
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
      <Dashboard tracks={tracks} getArtistAlbums={getArtistAlbums} />
      <div>
        {/* {searchAllTracks.map((track) => {
          console.log(track.name);
        })} */}
      </div>
    </div>
  );
}

export default Navbar;
