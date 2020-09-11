import React from "react";
import Carousel from "./Carousel";
import SkillSets from "./SkillSets";
import Internships from "./Internships";
import Connect from "../LandingPage/Connect";
import Footer from "../LandingPage/Footer";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="container">
          <ScrollAnimation animateIn="fadeInUp">
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
          </ScrollAnimation>
          <h4 className="subheading mt-5">Skill Sets</h4>
          <ScrollAnimation animateIn="fadeInUp">
            <SkillSets />
          </ScrollAnimation>
          <Internships />
          <ScrollAnimation animateIn="fadeInUp">
            <Connect />
            <Footer />
          </ScrollAnimation>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
