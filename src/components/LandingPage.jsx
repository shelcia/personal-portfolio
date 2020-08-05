import React from "react";
import Shelcia from "../assets/shelcia.svg";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="landingpage">
        <div className="row">
          <div className="col-sm-4">
            <h1>Shelcia</h1>
            <div className="icon-container">
              {/* <a
                href="https://www.instagram.com/_shelcia._.photography/"
                target="blank"
              >
                <i className="fab">&#xf16d;</i>
              </a> */}
              <a href="https://www.behance.net/shelcia" target="blank">
                <i className="fab">&#xf1b4;</i>
              </a>
              <a href="https://www.linkedin.com/in/shelcia/" target="blank">
                <i className="fab">&#xf0e1;</i>
              </a>
              <a href="https://github.com/shelcia" target="blank">
                <i className="fab">&#xf09b;</i>
              </a>
            </div>
          </div>
          <div className="col-sm-4">
            <img src={Shelcia} alt="" />
          </div>
          <div className="col-sm-4">
            <p>
              Hi ! I am an aspiring MERN stack <b>Website Developer</b> and{" "}
              <b>Designer</b> based in Chennai
            </p>
            <a href="#projects">
              <button type="button">Know More</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
