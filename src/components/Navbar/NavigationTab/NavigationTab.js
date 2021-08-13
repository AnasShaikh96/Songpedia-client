import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationTab() {
  return (
    <div
      className="nav justify-content-center  text-light fs-5"
      style={{ background: "#353535" }}
    >
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link link-light " aria-current="page">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light">Old hits</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light">Mood</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light ">Radio</a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationTab;
