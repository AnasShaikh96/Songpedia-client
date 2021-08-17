import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GetToplist from "../../methods/Actions/getToplist";

function TopList({ loggedIn }) {
  const songList = GetToplist();
  return loggedIn ? (
    <div>
      <div
        className="p-2 border-bottom d-flex align-items-center justify-content-between"
        style={{ background: "#eee" }}
      >
        <h2>Top Hindi Songs</h2>
        <FontAwesomeIcon icon={faArrowRight} className="fs-4" />
      </div>
      <div
        className="d-flex flex-row flex-nowrap my-2 "
        style={{ overflow: "hidden" }}
      >
        {songList.map((data) => {
          return (
            <div
              className="card m-1"
              style={{
                height: "14rem",
                overflow: "hidden",
                minWidth: "9rem",
              }}
              key={data.trackUri}
            >
              <img className="card-img-top" src={data.image} alt="..." />
              <div className="px-2">
                <h5 className="text-nowrap" style={{ fontSize: "0.9em" }}>
                  {data.songName}
                </h5>
                <p
                  className="text-muted text-wrap"
                  style={{ fontSize: "0.9em" }}
                >
                  {data.artistName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
}

export default TopList;
