import React from "react";
import { Link, NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark shadow-lg mb-5">
        <Link className="navbar-brand px-4 glitch" to="/">
          <h5 className="glitch m-0 p-0" data-text="Shelcia.">
            Shelcia.
          </h5>
        </Link>

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
