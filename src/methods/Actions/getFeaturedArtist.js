import { useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

function GetFeaturedArtist() {
  const [featuredArtist, setFeaturedArtist] = useState([]);

  const spotifyApi = new SpotifyWebApi({
    client_id: "dc39ec2485a447e08ad14c3ae1e920ef",
    client_secret: "5fb65e756f274eac9a077e5f8b3b2cf4",
    redirectUri: "http://localhost:8888/callback",
  });

  spotifyApi
    .getPlaylist("3eePXCTXTVgjTOw2JyEMyj")
    .then((res) => {
      const artistArray = res.tracks.items;
      artistArray.map((artist) => {
        return {};
      });
      console.log(res);
    })
    .catch((e) => {
      console.log("error from getFeaturedArtist", e);
    });
}

export default GetFeaturedArtist;
