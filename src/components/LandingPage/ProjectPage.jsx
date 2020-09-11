import React, { useContext } from "react";
import Code from "../../assets/icons/code.png";
import { ProjectsContext } from "../../components/Projectcontext/ProjectContext";

const ProjectPage = ({ match }) => {
  const projects = useContext(ProjectsContext);
  console.log(match);

  let projectdetails = projects.filter(
    (projects) => projects.id === match.params.id
  );

  return (
    <React.Fragment>
      <h1 style={{ marginTop: "12vh" }}>hjhrbj</h1>
      <div className="project">
        <div className="container">
          {projectdetails.map((project) => (
            <React.Fragment>
              <div key={project.id}>
                <h4 className="ml-4 mb-4">{project.name}</h4>
                <p className="ml-4 mb-4"> {project.description}</p>
                <a
                  href={project.code}
                  className="ml-4 mb-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Code}
                    alt="code"
                    height="15px"
                    style={{ paddingRight: "10px" }}
                  />
                  Code
                </a>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectPage;
