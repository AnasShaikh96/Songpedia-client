import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

function Player({ token }) {
  return (
    <SpotifyPlayer
      token={token}
      uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
      autoPlay={true}
    />
  );
}

export default Player;
