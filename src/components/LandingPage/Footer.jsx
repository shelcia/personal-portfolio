import React from "react";
import Heart from "../../assets/icons/heart.png";

const Footer = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p>
          Designed, Developed and Deployed <img src={Heart} alt="heart" /> by
          Shelcia . Copyright © 2020. All Rights Reserved.
        </p>
      </nav>
    </React.Fragment>
  );
};

export default Footer;
