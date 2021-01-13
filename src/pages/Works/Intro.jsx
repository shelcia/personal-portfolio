import React, { useState } from "react";
import GlowText from "../../partials/GlowText";
import ScrollAnimation from "react-animate-on-scroll";

const Intro = () => {
  const [icons] = useState([
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
  ]);

  return (
    <React.Fragment>
      <div className="bg-2 h-80">
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="popout title">
                <span>S</span>
                <span>h</span>
                <span>e</span>
                <span>l</span>
                <span>c</span>
                <span>i</span>
                <span>a</span>
                <br />
                <span>D</span>
                <span>a</span>
                <span>v</span>
                <span>i</span>
                <span>d</span>
              </h1>
              <div className="w-25 mb-5">
                <hr className="title-hr mt-0" />
              </div>
              <div className="w-50">
                <div className="d-flex justify-content-between">
                  {icons.map((icon, index) => (
                    <a
                      href={icon.link}
                      target="blank"
                      key={index + 1}
                      title={icon.title}
                    >
                      <i className={icon.classname} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column py-4">
              <ScrollAnimation animateIn="fadeInUp">
                <GlowText
                  first="F"
                  second="ull Stack Developer "
                  third="a"
                  fourth="nd Designer, based in Chennai"
                />
                <p className="mt-5">
                  I love developing stuff with MERN stack. I work on open source
                  and does freelance occasionally.
                </p>
                <a href="#projects">
                  <button className="button mt-4">
                    <i className="pr-2 fas fa-suitcase" />
                    See My works!
                  </button>
                </a>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
