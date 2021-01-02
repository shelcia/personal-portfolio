import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectContext";

const Animation = () => {
  const projects = useContext(ProjectsContext);
  return (
    <React.Fragment>
      <div className="card-list">
        {projects.map((project) => (
          <Link
            className="card card-deck text-light"
            key={project.id}
            to={`/project/${project.id}`}
          >
            <img className="card-img-top" src={project.image} alt="" />
            <div className="card-img-overlay">
              <h4 className="card-title">{project.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Animation;
