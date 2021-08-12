import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchRender({ searchAllTracks }) {
  return (
    <div
      className="overflow-auto"
      style={{
        position: "absolute",
        zIndex: "1",
        height: "50vh",
        width: "100%",
        background: "#eee",
      }}
    >
      <div>
        {searchAllTracks.map((track) => {
          return (
            <div
              className="d-flex flex-row justify-content-start align-item-center m-1 border-bottom"
              key={track.uri}
            >
              <img src={track.albumUrl} className="" width="75" />
              <div className="d-flex flex-column ms-2">
                <p className="fw-bold">{track.title}</p>
                <p className="text-muted">{track.artistName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchRender;
