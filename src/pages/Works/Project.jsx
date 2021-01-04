import React, { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../context/ProjectContext";
import Image from "./Image";
import TagButton from "../../partials/TagButton";

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
    <div className="bg-2 page-slide border-left border-primary">
      <div className="container py-3 mb-5">
        {details.map((project) => (
          <React.Fragment key={project.id}>
            <h1 className="subtitle mb-5"> {project.name} </h1>
            <div className="row">
              <div className="col-sm-6 d-flex justify-content-center flex-column">
                <h4 style={{ fontStyle: "italic" }}>Description</h4>
                <p className="mt-3">{project.description}</p>
                <h4 style={{ fontStyle: "italic" }}>Tech Stack</h4>
                <div className="d-flex justify-content-evenly flex-wrap mt-3">
                  {details.length &&
                    project.techstack.map((tech, index) => (
                      <TagButton index={index + 1} key={index} tag={tech} />
                    ))}
                </div>
                <div className="d-flex justify-content-between mt-3 btn-ctn flex-wrap">
                  {project.deploy && (
                    <a href={project.deployment} target="blank">
                      <button className="button">
                        <i className="fas fa-rocket pr-2" />
                        Deployement
                      </button>
                    </a>
                  )}
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
    </div>
  );
};

export default Project;
