import React from "react";
// import Shelcia from "../../assets/shelcia.png";

const Intro = () => {
  return (
    <React.Fragment>
      <section className="bg-2 h-80">
        <div className="container">
          <div className="row">
            {/* <div className="col-sm-4 d-flex justify-content-center align-items-center">
              <img
                src={Shelcia}
                alt="shelcia's emoji"
                className="img-fluid"
                title="Happy Shelcia !!"
                loading="lazy"
              />
            </div> */}
            <div className="col-sm-12 d-flex justify-content-center flex-column py-4">
              <h1 className="subtitle">About</h1>

              <p className="mt-4">
                Hello, I&apos;m Shelcia, a passionate software developer
                currently serving as a senior software developer at NASDAQ. With
                a strong background in frontend development, I previously worked
                at HIRA, where I took on the exciting challenge of designing and
                developing user interfaces from scratch. My team and I are
                currently focused on creating a job recruitment portal that aims
                to streamline the onboarding process and make it easier for job
                seekers and employers alike.
                <br />
                <br />
                Before joining NASDAQ, I had the privilege of being a part of
                the dynamic team at NYX Wolves, a Chennai-based startup that
                focused on cutting-edge digital marketing solutions. There, as a
                full-stack developer, I gained invaluable experience and honed
                my skills in creating robust and innovative software solutions.
                <br />
                <br />
                Over the years, I&apos;ve contributed my expertise to several
                organizations, including GUVI Geeks PVT Limited and Solera
                Health Sciences, where I&apos;ve consistently brought my passion
                for technology to the table.
                <br />
                <br />
                Beyond my professional endeavors, I find immense joy in engaging
                with the developer community and actively participating in
                open-source projects. I believe in the power of collaboration
                and strive to make a positive impact through my contributions.
                <br />
                <br />
                Apart from coding, I have a flair for writing, and you can often
                find me sharing my insights through articles on various tech
                topics. Additionally, mentoring fellow developers in open source
                competitions is something that brings me great satisfaction.
                <br />
                <br />
                When I&apos;m not immersed in code or contributing to the
                community, you&apos;ll likely find me pursuing my other passion:
                photography. Capturing the world through a lens allows me to see
                beauty in the most unexpected places. I hold a degree from
                IIITDM-K and am continuously driven to expand my knowledge and
                skills in the ever-evolving world of software development.
                {/* I am currently working as a senior software developer at NASDAQ.
                I was working as a frontend developer at HIRA, designing and
                developing the user interface from scratch. Ours is a small team
                working on a job recruitment portal, paving the way for easier
                onboarding. Previously, I worked as a full-stack developer
                engineer at NYX Wolves, a startup based in Chennai focusing on
                digital marketing. I worked for other places, including GUVI
                Geeks PVT Limited and Solera Health Sciences. I am active in the
                developer community and love contributing to open-source
                projects. Apart from this, I write articles occasionally and
                mentor developers in open source competitions. Apart from my
                work, I enjoy photography and work on freelance projects. I
                graduated from IIITDM-K. */}
              </p>
              <p className="mt-4">
                I love Javascript and React and have developed both mobile and
                web applications. I am currently into Go and VueJs.
              </p>
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
