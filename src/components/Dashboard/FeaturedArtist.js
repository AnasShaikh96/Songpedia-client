import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GetFeaturedArtist from "../../methods/Actions/getFeaturedArtist";

function FeaturedArtist() {
  const artists = GetFeaturedArtist();
  return (
    <div>
      <div
        className="p-2 border-bottom d-flex align-items-center justify-content-between"
        style={{ background: "#eee" }}
      >
        <h2>Featured Artists</h2>
        <FontAwesomeIcon icon={faArrowRight} className="fs-4" />
      </div>
      <div
        className="d-flex flex-row flex-nowrap my-2 "
        style={{ overflow: "hidden" }}
      >
        {artists.map((artist) => {
          return (
            <div
              className="card m-1"
              style={{
                height: "14rem",
                overflow: "hidden",
                minWidth: "9rem",
              }}
              key={artist.trackUri}
            >
              <img className="card-img-top" src={artist.image} alt="..." />
              <div className="px-2">
                <h5 className="text-nowrap" style={{ fontSize: "0.9em" }}>
                  {artist.songName}
                </h5>
                <p
                  className="text-muted text-wrap"
                  style={{ fontSize: "0.9em" }}
                >
                  {artist.artistName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedArtist;
