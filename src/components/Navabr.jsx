import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="/">
          Shelcia.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Work <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/resume">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
