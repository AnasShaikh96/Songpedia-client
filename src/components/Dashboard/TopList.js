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
        <p className="d-flex justify-content-end align-items-center">
          <span className="pe-2 link-dark" style={{ fontSize: ".8rem" }}>
            SEE ALL
          </span>
          <FontAwesomeIcon icon={faArrowRight} className="fs-4" />
        </p>
      </div>
      <div
        className="d-flex flex-row flex-nowrap"
        style={{ overflow: "hidden" }}
      >
        {songList.map((data) => {
          return (
            <div
              className="card m-1"
              style={{
                height: "13rem",
                overflow: "hidden",
                minWidth: "9rem",
              }}
              key={data.trackUri}
            >
              <img
                className="card-img-top"
                src={data.image}
                alt="..."
                style={{ width: "70%", margin: "15%", borderRadius: "10%" }}
              />
              <div className="px-2">
                <h5 className="text-nowrap" style={{ fontSize: "0.9em" }}>
                  {data.songName}
                </h5>
                <p
                  className="text-muted text-wrap"
                  style={{ fontSize: "0.8em" }}
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
