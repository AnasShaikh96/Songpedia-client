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
  const [searchResult, setSearchResult] = useState("");
  const [searchAllTracks, setSearchAllTracks] = useState([]);
  console.log(searchAllTracks);
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
    spotifyApi
      .searchTracks({ searchResult })
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
      tracks={tracks}
      getArtistAlbums={getArtistAlbums}
      setSearchResult={setSearchResult}
      searchResult={searchResult}
      getSearchTracks={getSearchTracks}
      searchAllTracks={searchAllTracks}
    />
  ) : (
    <Login />
  );
};

export default App;
