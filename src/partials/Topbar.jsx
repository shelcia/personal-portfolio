import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = ({ routes }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="/">
          Navbar
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
          <ul className="navbar-nav">
            {routes.map((route) => (
              <li className="nav-item">
                <NavLink
                  key={route.path}
                  // as={NavLink}
                  to={route.path}
                  className="nav-link"
                  activeClassName="active"
                  exact
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopBar;
