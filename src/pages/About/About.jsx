import React from "react";
import Intro from "./Intro";
// import Timeline from "./Timeline";

const About = () => {
  return (
    <React.Fragment>
      <div className="page-fade">
        <div className="bg-2 h-80">
          <div className="container">
            <Intro />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
