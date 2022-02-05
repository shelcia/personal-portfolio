import React, { useState } from "react";

const Footer = () => {
  const [link] = useState([
    {
      classname: "fab fa-github",
      link: "https://github.com/shelcia",
      title: "Github",
    },
    {
      classname: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/shelcia/",
      title: "LinkedIn",
    },
    {
      classname: "fab fa-medium-m",
      link: "https://medium.com/@shelcia",
      title: "Medium",
    },
    {
      classname: "fab fa-behance",
      link: "https://www.behance.net/shelcia",
      title: "Behance",
    },
    {
      classname: "fab fa-google",
      link: "mailto:msm17b011@iiitdm.ac.in",
      title: "Gmail",
    },
  ]);

  return (
    <React.Fragment>
      <div className="bg-1 w-100">
        <div className="bg-1 text-center container py-5">
          <div className="d-flex justify-content-center align-items-center">
            {link.map((link, index) => (
              <div key={index + 1} className="px-4">
                <a href={link.link} target="blank" title={link.title}>
                  <i className={link.classname} />
                </a>
              </div>
            ))}
          </div>
          <h6 className="mt-4">Shelcia — Copyright © 2021</h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
