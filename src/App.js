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

  // setInterval(() => {
  //   fetch("http://localhost:8888/refresh_token")
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log(e));
  // }, 3400);

  useEffect(() => {
    if (searchResult.length === 0) return;
    getSearchTracks();
    // playSong();

    // searchPlaylist();
    // getPlaylist();
  }, [searchResult]);

  const searchPlaylist = () => {
    spotifyApi
      .searchPlaylists("Retro-Bollywood")
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const playSong = () => {
    spotifyApi.play().then(
      function () {
        console.log("Playback started");
      },
      function (err) {
        //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
        console.log("Something went wrong!", err);
      }
    );
  };

  // const getPlaylist = () => {
  //   spotifyApi
  //     .getPlaylist("3eePXCTXTVgjTOw2JyEMyj")
  //     .then((res) => {
  //       const artistArray = res.tracks.items;

  //       artistArray.map((artist) => {
  //         const names = artist.track.artists.map((name) => name.name);
  //         console.log(artist.track);
  //         return {
  //           artistName: names,
  //           songName: artist.track.name,
  //         };
  //       });
  //     })
  //     .catch((e) => {
  //       console.log("error from getFeaturedArtist", e);
  //     });
  // };

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

  const getCategories = () => {
    spotifyApi
      .getCategories({
        limit: 20,
        offset: 0,
        country: "IN",
        locale: "ine_IN",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("Error from getCategories", e);
      });
  };

  return loggedIn ? (
    <>
      <Navbar
        setSearchResult={setSearchResult}
        searchAllTracks={searchAllTracks}
        searchResult={searchResult}
      />
      <TopList loggedIn={loggedIn} />
      <FeaturedArtist loggedIn={loggedIn} />
      <Player token={token} />
    </>
  ) : (
    <Login />
  );
};

export default App;
