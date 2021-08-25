import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SongpediaBanner() {
  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center "
      style={{
        background: "#ffdbcd",
        color: "#eb1c01",
        minHeight: "70vh",
        fontFamily: "Roboto",
      }}
    >
      <h1 className="display-2 fw-bold py-3 roboto">Welcome to Songpedia.</h1>
      <p className="display-6 fw-normal">Search.Listen.Vibe.</p>
    </div>
  );
}

export default SongpediaBanner;
