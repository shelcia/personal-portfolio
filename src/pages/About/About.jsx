import React from "react";
import Experience from "./Experience";
import Intro from "./Intro";
import Others from "./Others";
import Skills from "./Skills";
// import Timeline from "./Timeline";

const About = () => {
  return (
    <div className="page-fade">
      <Intro />
      <Skills />
      <Experience />
      <Others />
    </div>
  );
};

export default About;
