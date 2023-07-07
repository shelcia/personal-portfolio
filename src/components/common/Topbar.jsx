import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const TopBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark shadow px-5">
        <Link className="navbar-brand" to="/">
          <h5 className="m-0 p-0" data-text="Shelcia.">
            Shelcia.
          </h5>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topmenu"
          aria-controls="topmenu"
          aria-expanded={toggleMenu ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            toggleMenu
              ? `collapse navbar-collapse show`
              : `collapse navbar-collapse`
          }
          id="topmenu"
          // style={{ transition: "all 0.5s ease-in" }}
        >
          <ul className="navbar-nav ms-auto px-5">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => setToggleMenu(false)}
              >
                Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => setToggleMenu(false)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/resume"
                onClick={() => setToggleMenu(false)}
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
