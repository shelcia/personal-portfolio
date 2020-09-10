import React from "react";
import AboutArt from "../../assets/aboutart.png";
import Carousal from "./Carousal";

const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1>About</h1>
              <p>
                I am a final year engineering graduate working with Design and
                web development for past two years
              </p>
              <br></br>
              <p>
                I am a final year engineering graduate working with Design and
                web development for past two years
              </p>
            </div>
            <div className="col-sm-6" style={{ backgroundImage: { AboutArt } }}>
              <Carousal />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
