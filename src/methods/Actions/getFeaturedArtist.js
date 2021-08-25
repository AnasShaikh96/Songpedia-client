import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

function GetFeaturedArtist() {
  const [featuredArtist, setFeaturedArtist] = useState([]);

  const spotifyApi = new SpotifyWebApi({
    client_id: "dc39ec2485a447e08ad14c3ae1e920ef",
    client_secret: "5fb65e756f274eac9a077e5f8b3b2cf4",
    redirectUri: "http://localhost:8888/callback",
  });

  useEffect(() => {
    if (!featuredArtist.length === 0) return;
    getArtist();
  }, []);

  const getArtist = () => {
    spotifyApi
      .getPlaylist("3eePXCTXTVgjTOw2JyEMyj")
      .then((res) => {
        const artists = res.tracks.items;
        const artistArray = artists.map((artist) => {
          const names = artist.track.artists.map((name) => name.name);

          return {
            artistName: names.map((name) => name),
            songName: artist.track.name,
            trackUri: artist.track.uri,
            image: artist.track.album.images[0]
              ? artist.track.album.images[0].url
              : null,
          };
        });
        setFeaturedArtist(artistArray);
      })
      .catch((e) => {
        console.log("error from getFeaturedArtist", e);
      });
  };
  return featuredArtist;
}

export default GetFeaturedArtist;
