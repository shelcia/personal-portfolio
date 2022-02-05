import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectContext";
import Animation from "./Works2.0";
import GlowText from "../../partials/GlowText";
import ScrollAnimation from "react-animate-on-scroll";

const Works = () => {
  const projects = useContext(ProjectsContext);
  const [view, setView] = useState("cards");

  return (
    <React.Fragment>
      <div className="bg-2 h-80" id="projects">
        <div className="container py-5">
          <h1 className="subtitle">Works</h1>

          <div className="d-flex justify-content-center align-items-center my-5">
            <GlowText first="C" second="ard D" third="e" fourth="cks" />
            <label className="heart-switch mx-4">
              <input
                type="checkbox"
                onClick={() => setView(view === "cards" ? "classic" : "cards")}
              />
              <svg viewBox="0 0 33 23" fill="white">
                <path d="M23.5,0.5 C28.4705627,0.5 32.5,4.52943725 32.5,9.5 C32.5,16.9484448 21.46672,22.5 16.5,22.5 C11.53328,22.5 0.5,16.9484448 0.5,9.5 C0.5,4.52952206 4.52943725,0.5 9.5,0.5 C12.3277083,0.5 14.8508336,1.80407476 16.5007741,3.84362242 C18.1491664,1.80407476 20.6722917,0.5 23.5,0.5 Z"></path>
              </svg>
            </label>
            <GlowText first="C" second="lassic " third="L" fourth="ist" />
          </div>

          {view === "cards" && (
            <ScrollAnimation animateIn="fadeIn">
              <Animation />
            </ScrollAnimation>
          )}

          {view === "classic" && (
            <ScrollAnimation animateIn="fadeIn">
              <div className="card-columns">
                {projects.map((project) => (
                  <Link
                    className="card project-card border-0 shadow-lg text-light"
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
            </ScrollAnimation>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Works;
