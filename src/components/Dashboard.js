import React from "react";

function Dashboard({ tracks, getArtistAlbums }) {
  return (
    <div className="container justify-contents-center align-items-center m-3">
      <button
        className="btn btn-success"
        onClick={() => {
          getArtistAlbums();
        }}
      >
        click here
      </button>
      <p>{tracks.name}</p>
      <img src={tracks.img} width="300" height="300" />
    </div>
  );
}

export default Dashboard;
