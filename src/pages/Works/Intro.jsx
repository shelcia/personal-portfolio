import React, { useState } from "react";

const Intro = () => {
  const [icons] = useState([
    {
      classname: "fab fa-github",
      link: "https://github.com/shelcia",
    },
    {
      classname: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/shelcia/",
    },
    {
      classname: "fab fa-medium-m",
      link: "https://medium.com/@shelcia",
    },
    {
      classname: "fab fa-behance",
      link: "https://www.behance.net/shelcia",
    },
  ]);

  return (
    <React.Fragment>
      <div className="bg-2 h-80">
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="title">Shelcia David.</h1>
              <div className="w-25 mb-5">
                <hr className="title-hr mt-0" />
              </div>
              <div className="w-50">
                <div className="d-flex justify-content-between">
                  {icons.map((icon, index) => (
                    <a href={icon.link} target="blank" key={index + 1}>
                      <i className={icon.classname} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <p>Full Stack Devleoper and Deisgmer</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
