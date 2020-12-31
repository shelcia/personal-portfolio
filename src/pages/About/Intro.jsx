import React from "react";
import Shelcia from "../../assets/shelcia.gif";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-4">
          <img
            src={Shelcia}
            alt="gif"
            className="img-fluid"
            title="Happy Shelcia !!"
          />
        </div>
        <div className="col-sm-8">
          <h1 className="glitch" data-text="About">
            About
          </h1>
          <p className="mt-4">
            I am a final year engineering graduate working with Design and web
            development for past two years.
          </p>
          <p className="mt-3">
            I have a passion for learning and building interesting things. I
            love how technologies evolve and have a major impact on our day to
            day lives.
          </p>
          <p>
            Shelcia is a confident, focus-driven individual. Shelcia has got
            good experience working as a Web developer with modern tech stacks
            like MERN and some old good stuff like LAMP, and not to forget the
            goddess Vanilla JS. Shelcia is often driven by purpose so she is
            looking forward to being part of something which means a big deal to
            her. She has good experience working as a Web developer and Designer
            in startup(s) where she ended up creating web apps. Shelcia loves
            open source contributions and does freelance occasionally.
          </p>
          <div>
            <button className="button">My Skills</button>
            <button className="button">My Experience</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
