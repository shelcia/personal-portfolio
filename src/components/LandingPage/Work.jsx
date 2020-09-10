import React from "react";
import Project from "./Project";
import Ongoing from "./OnGoing";
import Connect from "./Connect";
import Footer from "./Footer";

const Work = () => {
  return (
    <React.Fragment>
      <div className="container" id="works">
        <Project />
        <Ongoing />
        <Connect />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Work;
