import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark shadow-lg mb-5">
        <a className="navbar-brand px-4" href="/">
          Shelcia.
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto px-4">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/contact"
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopBar;
