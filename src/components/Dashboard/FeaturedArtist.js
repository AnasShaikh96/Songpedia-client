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
        <p className="d-flex justify-content-end align-items-center">
          <a className="pe-2 link-light" style={{ fontSize: ".8rem" }}>
            SEE ALL
          </a>
          <FontAwesomeIcon icon={faArrowRight} className="fs-4" />
        </p>
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
                height: "13rem",
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
                <div
                  className="text-muted text-wrap"
                  style={{ fontSize: "0.8em" }}
                >
                  <ol className="breadcrumb">
                    {artist.artistName.map((artist) => {
                      return (
                        <li className="breadcrumb-item" key={artist.trackUri}>
                          <span>{artist}</span>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedArtist;
