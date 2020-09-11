import React, { useContext } from "react";
import Code from "../../assets/icons/code.png";
import Live from "../../assets/icons/live.png";
import { ProjectsContext } from "../../components/Projectcontext/ProjectContext";
import ProjectArt from "../../assets/projectart.png";
import ScrollAnimation from "react-animate-on-scroll";

const ProjectPage = ({ match }) => {
  const projects = useContext(ProjectsContext);
  console.log(match);

  let projectdetails = projects.filter(
    (projects) => projects.id === match.params.id
  );

  return (
    <React.Fragment>
      <div className="project">
        <div className="container">
          {projectdetails.map((project) => (
            <React.Fragment key={project.id}>
              <div className="row">
                <div className="col-sm-6">
                  <ScrollAnimation animateIn="fadeInUp">
                    <h4 className="ml-4 mb-4 subheading mt-4">
                      {project.name}
                    </h4>
                    <p className="ml-4 mb-4 mt-5"> {project.description}</p>
                    <p className="ml-4 mb-4">
                      <b>Tech Stack: </b>
                      {project.techstack}
                    </p>
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
                    {project.deploy ? (
                      <a
                        href={project.deployment}
                        className="ml-4 mb-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={Live}
                          alt="live"
                          height="15px"
                          style={{ paddingRight: "10px" }}
                        />
                        Deployment
                      </a>
                    ) : null}
                  </ScrollAnimation>
                </div>
                <div className="col-sm-6">
                  <img src={ProjectArt} alt="" className="art" />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectPage;
