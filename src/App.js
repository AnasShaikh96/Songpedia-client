import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import Navbar from "./components/Navbar/Navbar.js";

import getHashParams from "./methods/window/getHashParams";

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [searchAllTracks, setSearchAllTracks] = useState([]);

  const params = new getHashParams();
  const token = params.access_token;

  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);
      setLoggedIn(true);
    }
  }, [token]);
  useEffect(() => {
    if (searchResult.length === 0) return;
    getSearchTracks();
    // getAlbum();
    // getSearchArtists();
    console.log(searchResult);
  }, [searchResult]);

  const getAlbum = () => {
    spotifyApi
      .getAlbum("5U4W9E5WsYb2jUQWePT8Xm")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error from getArtist", err);
      });
  };

  const getSearchTracks = () => {
    spotifyApi
      .searchTracks(searchResult)
      .then((res) => {
        const tracks = res.tracks.items;
        const trackArray = tracks.map((track) => {
          return {
            artistName: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        });
        setSearchAllTracks(trackArray);
      })
      .catch((e) => {
        console.log("error from searchTracks", e);
      });
  };

  const getSearchArtists = () => {
    spotifyApi
      .searchArtists(searchResult)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("error from getSearchArtist", e);
      });
  };

  return loggedIn ? (
    <Navbar
      setSearchResult={setSearchResult}
      searchAllTracks={searchAllTracks}
      searchResult={searchResult}
    />
  ) : (
    <Login />
  );
};

export default App;
