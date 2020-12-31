import React, { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectContext";

const Animation = () => {
  const projects = useContext(ProjectsContext);
  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container">
          <div className="card-list">
            {projects.map((project) => (
              <div className="card card-deck" key={project.id}>
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

export default Animation;
