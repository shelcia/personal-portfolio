import React, { useState } from "react";
import FullStack from "./FullStack";
import UIDesign from "./UIDesign";
import Design from "./Design";
import OnGoing from "./OnGoing";
import NavBar from "../NavBar";

const Projects = () => {
  const [view, setView] = useState("fullstack");

  return (
    <React.Fragment>
      <NavBar />
      <div className="projects" id="projects">
        <div className="row">
          {view === "fullstack" && <FullStack setView={setView} />}
          {view === "uidesign" && <UIDesign setView={setView} />}
          {view === "design" && <Design setView={setView} />}
          {view === "ongoing" && <OnGoing setView={setView} />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
