import React, { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../context/ProjectContext";
import Image from "./Image";

const Project = ({ match }) => {
  const projectDetails = useContext(ProjectsContext);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const filterResults = projectDetails.filter(
      (project) => project.id === match.params.id
    );
    setDetails(filterResults);
  }, [projectDetails, match.params.id]);

  return (
    <React.Fragment>
      <div className="container py-3">
        {details.map((project) => (
          <React.Fragment key={project.id}>
            <h1 className="subtitle"> {project.name} </h1>
            <div className="row">
              <div className="col-sm-6 d-flex justify-content-center flex-column">
                <h4>Description</h4>
                <p>{project.description}</p>
                <h4 className="mt-5">Tech Stack</h4>
                <div className="d-flex justify-content-evenly">
                  {details.length &&
                    project.techstack.map((tech, index) => (
                      <div key={index + 1}>{tech}</div>
                    ))}
                </div>
                <div className="d-flex justify-content-between mt-5">
                  <a href={project.deployment} target="blank">
                    <button className="button">
                      <i className="fas fa-rocket pr-2" />
                      Deployement
                    </button>
                  </a>
                  <a href={project.code} target="blank">
                    <button className="button">
                      <i className="fas fa-code pr-2" /> Source Code
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 d-flex justify-content-center py-5">
                <div className="w-100">
                  <Image image={project.imageURL} />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Project;
