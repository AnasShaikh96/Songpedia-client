import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationTab() {
  return (
    <div
      className="nav justify-content-center  text-light fs-6"
      style={{ background: "#353535" }}
    >
      <ul className="nav">
        <li className="nav-item">
          <span className="nav-link link-light " aria-current="page">
            Trending
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link link-light">Old hits</span>
        </li>
        <li className="nav-item">
          <span className="nav-link link-light">Mood</span>
        </li>
        <li className="nav-item">
          <span className="nav-link link-light ">Radio</span>
        </li>
      </ul>
    </div>
  );
}

export default NavigationTab;
