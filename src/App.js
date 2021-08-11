import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import Navbar from "./components/Navbar.js";

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
    getAlbum();
    getSearchTracks();
    console.log(searchAllTracks[0]);
  }, [searchResult]);

  const getAlbum = () => {
    spotifyApi
      .getAlbum("3Y6XTh0tVmiqdHQ6X7oFqX")
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
        console.log(e);
      });
  };
  return loggedIn ? (
    <Navbar
      setSearchResult={setSearchResult}
      searchAllTracks={searchAllTracks}
    />
  ) : (
    <Login />
  );
};

export default App;
