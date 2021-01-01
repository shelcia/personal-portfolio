import React, { useContext, useState } from "react";
import { ProjectsContext } from "../../context/ProjectContext";
import Animation from "./Works2.0";

const Works = () => {
  const projects = useContext(ProjectsContext);
  const [view, setView] = useState("cards");

  return (
    <React.Fragment>
      <div className="bg-2 h-80" id="projects">
        <div className="container pt-5">
          <h1 className="subtitle">Works</h1>

          <button
            className="button"
            onClick={() => setView(view === "cards" ? "classic" : "cards")}
          >
            Toggle
          </button>

          {view === "cards" && <Animation />}

          {view === "classic" && (
            <div className="card-columns">
              {projects.map((project) => (
                <div
                  className="card project-card border-0 border-radius-0 shadow-lg"
                  key={project.id}
                >
                  <img className="card-img-top" src={project.image} alt="" />
                  <div className="card-img-overlay">
                    <h4 className="card-title">{project.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Works;
