import React from "react";
import Carousel from "./Carousel";
import SkillSets from "./SkillSets";
import Internships from "./Internships";
import Connect from "../LandingPage/Connect";
import Footer from "../LandingPage/Footer";

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
            <div className="col-sm-6" id="carouselcolumn">
              <Carousel />
            </div>
          </div>
          <h4 className="subheading mt-5">Skill Sets</h4>
          <SkillSets />
          <Internships />
          <Connect />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
