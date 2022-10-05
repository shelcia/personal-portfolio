import React from "react";
import Shelcia from "../../assets/shelcia.png";

const Intro = () => {
  return (
    <React.Fragment>
      <section className="bg-2 h-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 d-flex justify-content-center align-items-center">
              <img
                src={Shelcia}
                alt="shelcia's emoji"
                className="img-fluid"
                title="Happy Shelcia !!"
                loading="lazy"
              />
            </div>
            <div className="col-sm-8 d-flex justify-content-center flex-column py-4">
              <h1 className="subtitle">About</h1>

              <p className="mt-4">
                I am currently working as Senior Software Development at NASDAQ.
                I was working as a frontend Developer designing UI and
                developing it from scratch at HIRA. Ours is a small team working
                on a Job Recruitment portal paving the way for easier
                onboarding. Previously I worked as a Full-Stack Developer
                Engineer at NYX Wolves, a startup based in Chennai focusing on
                Digital Marketing. I worked for other places, including GUVI
                Geeks PVT Limited and Solera Health Sciences. I am active in the
                developer community and love contributing to Open source
                projects. Apart from this, I write articles occasionally and
                mentors developers in open source competitions. I love
                photography and take up a freelance projects apart from my
                college work. I graduated from IIITDM K.
              </p>
              <p className="mt-4">
                I love Javascript and React and have developed both mobile and
                web applications. I am currently into Go and VueJs.
              </p>
              {/* <p className="text-muted mt-3">
                P.S Using first person is cliche !!!
              </p> */}
              <div className="mt-3 d-flex justify-content-between flex-wrap">
                <a href="#skills">
                  <button className="button">My Skills</button>
                </a>
                <a href="#experiences">
                  <button className="button">My Experience</button>
                </a>
                {/* <button className="button">Others</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Intro;
