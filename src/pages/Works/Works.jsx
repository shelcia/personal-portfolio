import React, { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectContext";

const Works = () => {
  const projects = useContext(ProjectsContext);

  return (
    <React.Fragment>
      <div className="bg-2 h-80" id="projects">
        <div className="container pt-5">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Works;
