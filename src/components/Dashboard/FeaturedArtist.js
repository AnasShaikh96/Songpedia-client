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
        idhar aayega
        {artists.map((artist) => {
          return (
            <div>
              <p>{artist.songName} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedArtist;
