import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login.js";
// import Dashboard from "./components/Dashboard.js";
import Navbar from "./components/Navbar.js";

const spotifyApi = new SpotifyWebApi();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tracks, setTracks] = useState([]);
  const params = new getHashParams();
  // console.log(params);
  const token = params.access_token;

  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);
      setLoggedIn(true);
      console.log(tracks);
    }
  }, [token]);

  function getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  const getArtistAlbums = () => {
    spotifyApi
      .getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE")
      .then((res) => {
        setTracks({
          name: res.items[0].name,
          img: res.items[0].images[0].url,
        });
      })
      .catch((e) => console.log(e));

    console.log(tracks);
  };

  const getSearchTracks = () => {
    spotifyApi.searchTracks();
  };

  return loggedIn ? (
    <Navbar tracks={tracks} getArtistAlbums={getArtistAlbums} />
  ) : (
    <Login />
  );
};

export default App;
