import React from "react";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <React.Fragment>
      <div className="bg-2 h-80">
        <div className="container py-4" id="experiences">
          <h1 className="subtitle">Experience</h1>
          <Timeline />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
