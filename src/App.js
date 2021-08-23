import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar.js";

import TopList from "./components/Dashboard/TopList.js";

import FeaturedArtist from "./components/Dashboard/FeaturedArtist.js";
import Player from "./components/Dashboard/Player/Player.js";
import getHashParams from "./methods/window/getHashParams";

const spotifyApi = new SpotifyWebApi({
  client_id: "dc39ec2485a447e08ad14c3ae1e920ef",
  client_secret: "5fb65e756f274eac9a077e5f8b3b2cf4",
  redirectUri: "http://localhost:8888/callback",
});

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
  }, [searchResult]);

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

  return loggedIn ? (
    <>
      <Navbar
        setSearchResult={setSearchResult}
        searchAllTracks={searchAllTracks}
        searchResult={searchResult}
      />
      {/* <TopList loggedIn={loggedIn} /> */}
      {/* <FeaturedArtist loggedIn={loggedIn} /> */}
      {/* <Player token={token} /> */}
    </>
  ) : (
    <Login />
  );
};

export default App;
