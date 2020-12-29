import React from "react";
import Intro from "./Intro";
import Timeline from "./Timeline";

const About = () => {
  return (
    <React.Fragment>
      <div className="container page-fade">
        <Intro />
        <Timeline />
      </div>
    </React.Fragment>
  );
};

export default About;
