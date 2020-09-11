import React from "react";
import Project from "./Project";
import Ongoing from "./OnGoing";
import Connect from "./Connect";
import Footer from "./Footer";
import ScrollAnimation from "react-animate-on-scroll";

const Work = () => {
  return (
    <React.Fragment>
      <div className="container" id="works">
        <Project />
        <Ongoing />
        <ScrollAnimation animateIn="fadeInUp">
          <Connect />
          <Footer />
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default Work;
