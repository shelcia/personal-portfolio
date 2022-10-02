import React from "react";
import { socialMediaIcons } from "../../context/SocialMediaContext";
import GlowText from "../../partials/GlowText";

const Intro = () => {
  return (
    <React.Fragment>
      <header className="bg-2 h-80">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
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
                  {socialMediaIcons.map((icon, index) => (
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

            <div
              className="col-md-6 d-flex justify-content-center align-items-center flex-column py-4"
              data-aos="fade-up"
            >
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
                  <i className="ps-2 fas fa-suitcase" />
                  See My works!
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Intro;
