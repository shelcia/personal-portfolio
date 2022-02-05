import React from "react";
import { iconscol1, iconscol2, iconscol3 } from "../../context/SkillsContext";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container py-4" id="skills">
          <h1 className="subtitle mb-5">Skills</h1>
          <div className="row">
            <div className="col-sm-4">
              <ul className="icons-list">
                {iconscol1.map((icon, index) => (
                  <li key={index + 1}>
                    <i className={icon.icon} />
                    {icon.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="icons-list">
                {iconscol2.map((icon, index) => (
                  <li key={index + 1}>
                    <i className={icon.icon} />
                    {icon.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="icons-list">
                {iconscol3.map((icon, index) => (
                  <li key={index + 1}>
                    <img src={icon.img} alt="" />
                    {icon.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
