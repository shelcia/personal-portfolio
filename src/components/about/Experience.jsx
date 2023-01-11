import React from "react";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <React.Fragment>
      <section className="bg-2 h-80">
        <div className="container py-4" id="experiences">
          <h1 className="subtitle">Experience</h1>
          <Timeline />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Experience;
