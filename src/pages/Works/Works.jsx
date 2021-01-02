import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectContext";
import Animation from "./Works2.0";

const Works = () => {
  const projects = useContext(ProjectsContext);
  const [view, setView] = useState("cards");

  return (
    <React.Fragment>
      <div className="bg-2 h-80" id="projects">
        <div className="container py-5">
          <h1 className="subtitle">Works</h1>

          <div className="d-flex justify-content-center align-items-center my-5">
            <h4 className="px-4">Card Decks</h4>
            <div className="toggle pancake-stack">
              <input
                id="pancake"
                type="checkbox"
                onClick={() => setView(view === "cards" ? "classic" : "cards")}
              />
              <label className="toggle-item" htmlFor="pancake">
                <div className="pancakes">
                  <div className="pancake"></div>
                  <div className="pancake"></div>
                  <div className="pancake"></div>
                  <div className="butter"></div>
                </div>
              </label>
            </div>
            <h4 className="px-4">Classic List</h4>
          </div>

          {view === "cards" && <Animation />}

          {view === "classic" && (
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
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Works;
