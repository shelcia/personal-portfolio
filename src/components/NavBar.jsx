import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo"></div>
      <div className="nav-items">
        <a href="#project">Projects</a>
        <a href="#aboutme">About Me</a>
        <a href="#contactme">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
