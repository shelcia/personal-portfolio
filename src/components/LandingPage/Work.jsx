import React from "react";
import Project from "./Project";
import Ongoing from "./OnGoing";

const Work = () => {
  return (
    <React.Fragment>
      <div className="container" id="work">
        <Project />
        <Ongoing />
      </div>
    </React.Fragment>
  );
};

export default Work;
