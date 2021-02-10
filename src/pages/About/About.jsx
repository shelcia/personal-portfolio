import React from "react";
import Experience from "./Experience";
import Intro from "./Intro";
import Others from "./Others";
import Skills from "./Skills";
import Footer from "../../partials/Footer";

const About = () => {
  return (
    <div className="page-fade">
      <Intro />
      <Skills />
      <Experience />
      <Others />
      <Footer />
    </div>
  );
};

export default About;
