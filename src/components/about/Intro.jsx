import React from "react";
import Shelcia from "../../assets/shelcia.gif";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="bg-2 h-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 d-flex justify-content-center align-items-center">
              <img
                src={Shelcia}
                alt="gif"
                className="img-fluid"
                title="Happy Shelcia !!"
              />
            </div>
            <div className="col-sm-8 d-flex justify-content-center flex-column py-4">
              <h1 className="subtitle">About</h1>

              <p className="mt-4">
                Shelcia is a Full-Stack Developer Engineer at NYX Wolves a
                startup based in Chennai focusing on Digital Marketing. She's
                worked for other places, including GUVI Geeks PVT Limited and
                Solera Health Sciences. She's active in the developer community
                and loves contributing to Open source projects. Apart from this,
                she writes articles occasionally and mentors developers in open
                source competitions. She loves photography and takes up a
                freelance project apart from her college work. She is currently
                a final year undergraduate at IIITDM K.
              </p>
              <p className="mt-4">
                Shelcia loves Javascript and React. She has developed both
                mobile and web applications. She is currently into Go and VueJs.
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
      </div>
    </React.Fragment>
  );
};

export default Intro;
