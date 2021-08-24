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
        className="p-2  d-flex align-items-center justify-content-between bg-dark text-light"
        style={{}}
      >
        <h2>Featured Artists</h2>
        <FontAwesomeIcon icon={faArrowRight} className="fs-4" />
      </div>
      <div
        className="d-flex flex-row flex-nowrap "
        style={{ overflow: "hidden", background: "#333" }}
      >
        {artists.map((artist) => {
          return (
            <div
              className="card m-1 text-light"
              style={{
                height: "14rem",
                overflow: "hidden",
                minWidth: "9rem",
                background: "#444",
              }}
              key={artist.trackUri}
            >
              <img
                className="card-img-top"
                src={artist.image}
                alt="..."
                style={{ width: "70%", margin: "15%", borderRadius: "10%" }}
              />
              <div className="px-2">
                <h5 className="text-nowrap" style={{ fontSize: "0.9em" }}>
                  {artist.songName}
                </h5>
                <p
                  className="text-muted text-wrap"
                  style={{ fontSize: "0.8em" }}
                >
                  {artist.artistName.map((artist) => {
                    return (
                      <p>
                        <span>{artist} </span>
                      </p>
                    );
                  })}
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
