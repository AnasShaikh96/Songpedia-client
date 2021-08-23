import React from "react";
import SearchHandler from "./Search/SearchHandler.js";
import NavigationTab from "./NavigationTab/NavigationTab.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark  " style={{ background: "#595959" }}>
        <div className="container">
          <a className="navbar-brand me-5">Songpedia</a>
          <SearchHandler className="flex-grow-1" />
        </div>
      </nav>
      <NavigationTab />
    </>
  );
}

export default Navbar;
