import React from "react";

const SkillSets = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-6">
          <ul
            style={{ listStyleType: "circle", lineHeight: "200%" }}
            className="skilllist"
          >
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Adobe XD</li>
            <li>Figma</li>
            <li>Bootstrap</li>
            <li>HTML/CSS</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul
            style={{ listStyleType: "circle", lineHeight: "200%" }}
            className="skilllist"
          >
            <li>Heroku</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>GitHub</li>
            <li>C programming</li>
            <li>C++ programming</li>
            <li>IOT and Robotics</li>
            <li>AutoCAD</li>
            <li>Catia</li>
            <li>Bootstrap</li>
            <li>Raspberry Pi and Arduino</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SkillSets;
