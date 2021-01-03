import React, { useState } from "react";

const Skills = () => {
  const [iconscol1] = useState([
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-javascript-plain colored", name: "Javascript" },
    { icon: "devicon-typescript-plain colored", name: "Typescript" },
    { icon: "devicon-react-original colored", name: "React" },
    { icon: "devicon-vuejs-plain colored", name: "Vue Js" },
    { icon: "devicon-redux-original colored", name: "Redux" },
    { icon: "devicon-react-original", name: "React Native" },
    { icon: "devicon-nodejs-plain colored", name: "NodeJs" },
    { icon: "devicon-express-original-wordmark", name: "Express" },
    { icon: "devicon-html5-plain colored", name: "HTML 5" },
    { icon: "devicon-css3-plain colored", name: "CSS3" },
    { icon: "devicon-sass-original colored", name: "SASS" },
  ]);

  const [iconscol2] = useState([
    { icon: "devicon-amazonwebservices-original colored", name: "AWS" },
    { icon: "devicon-heroku-plain colored", name: "Heroku" },
    { icon: "devicon-mongodb-plain-wordmark colored", name: "MongoDB" },
    { icon: "devicon-mysql-plain-wordmark colored", name: "MY SQL" },
    { icon: "devicon-github-original", name: "Github" },
    { icon: "devicon-bootstrap-plain colored", name: "Bootstrap" },
    { icon: "devicon-materialui-plain colored", name: "Material UI" },
    { icon: "devicon-npm-original-wordmark colored", name: "NPM" },
    { icon: "devicon-yarn-plain colored", name: "Yarn" },
    { icon: "devicon-visualstudio-plain colored", name: "Visual Studio" },
    { icon: "devicon-pycharm-plain colored", name: "PyCharm" },
    { icon: "devicon-photoshop-plain colored", name: "Photoshop" },
  ]);

  const [iconscol3] = useState([
    {
      img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      name: "Figma",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
      name: "Arduino",
    },
    {
      img:
        "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      name: "GCP",
    },
    {
      img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      name: "Postman",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
      name: "Adobe XD",
    },
  ]);

  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container py-4" id="skills">
          <h1 className="subtitle">Skills</h1>
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
