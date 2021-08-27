import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SongpediaBanner() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">Sonpedia</span>
        <div className="container-fluid"></div>
      </nav>

      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center text-end "
        style={{
          background: "#fec5e5",
          color: "#eb1c01",
          minHeight: "90vh",
          fontFamily: "Helvetica",
        }}
      >
        <h1 className="display-3 fw-bold py-3 roboto">Welcome to Songpedia.</h1>
        <p className="fs-3">Search.Listen.Vibe.</p>
      </div>
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-start ps-5"
        style={{
          background: "#1338be",
          color: "#77dd77",
          minHeight: "90vh",
          fontFamily: "Roboto",
          position: "relative",
        }}
      >
        <h1 className="display-3 fw-bold py-3 roboto">New to Songpedia?</h1>
        <p className="fs-3">Signup With Google.</p>
        <a
          href="http://localhost:8888/login"
          className="btn fw-normal rounded-pill fs-6 px-4 text-uppercase"
          style={{ background: "#77dd77", color: "#1338be" }}
        >
          Login to Songpedia
        </a>
      </div>
    </>
  );
}

export default SongpediaBanner;
