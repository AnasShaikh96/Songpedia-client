import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

function GetSearchTracks() {
  const [searchAllTracks, setSearchAllTracks] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  const spotifyApi = new SpotifyWebApi({
    client_id: "dc39ec2485a447e08ad14c3ae1e920ef",
    client_secret: "5fb65e756f274eac9a077e5f8b3b2cf4",
    redirectUri: "http://localhost:8888/callback",
  });

  useEffect(() => {
    if (searchResult.length === 0) return;
    getTracks();
  }, [searchResult]);

  const getTracks = () => {
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

  return { searchAllTracks, setSearchResult, searchResult };
}

export default GetSearchTracks;
