import React from "react";
import Experience from "./Experience";
import Intro from "./Intro";
import Skills from "./Skills";
// import Timeline from "./Timeline";

const About = () => {
  return (
    <div className="page-fade">
      <Intro />
      <Skills />
      <Experience />
    </div>
  );
};

export default About;
