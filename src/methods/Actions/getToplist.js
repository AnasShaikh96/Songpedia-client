import { useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

function GetToplist() {
  const [toplist, setToplist] = useState([]);

  const spotifyApi = new SpotifyWebApi({
    client_id: "dc39ec2485a447e08ad14c3ae1e920ef",
    client_secret: "5fb65e756f274eac9a077e5f8b3b2cf4",
    redirectUri: "http://localhost:8888/callback",
  });
  spotifyApi
    .getPlaylist("7lTfsY5pPGWeqX1D79SYb2")
    .then((res) => {
      const tracks = res.tracks.items;
      const trackArray = tracks.map((track) => {
        return {
          songName: track.track.name,
          artistName: track.track.artists[0].name,
          trackUri: track.track.uri,
          image: track.track.album.images[0].url,
        };
      });
      setToplist(trackArray);
    })
    .catch((e) => {
      console.log("error from getPlaylist", e);
    });

  return toplist;
}

export default GetToplist;
