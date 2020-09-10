import React from "react";
import { NavLink } from "react-router-dom";
import Resume from "../assets/shelcia_resume.pdf";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <NavLink className="navbar-brand" to="/">
          Shelcia.
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="nav-link-active"
              >
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="nav-link-active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Resume} target="blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
