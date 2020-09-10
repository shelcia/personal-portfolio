import React from "react";

const Connect = () => {
  return (
    <React.Fragment>
      <ul className="nav" id="connect">
        <li className="nav-item">
          <a
            className="nav-link active"
            href="https://www.behance.net/shelcia"
            target="blank"
          >
            Behance
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://github.com/shelcia"
            target="blank"
          >
            Github
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/shelcia/"
            target="blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="mailto:msm17b011@iiitdm.ac.in"
            target="blank"
          >
            Mail
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Connect;
