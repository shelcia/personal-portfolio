import React from "react";
import CountUp from "react-countup";
import ScrollAnimation from "react-animate-on-scroll";

const Github = () => {
  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container pt-5">
          <h1 className="subtitle">Github Numbers</h1>
          <ScrollAnimation animateIn="fadeInUp">
            <div className="row mt-5">
              <div className="col-sm-4 py-4">
                <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                  <CountUp end={1536} duration={5} delay={5} />
                  <p>Open Source Contributions</p>
                  <p className="text-muted">as of 11 Jan 2021</p>
                </div>
              </div>
              <div className="col-sm-4 py-4">
                <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                  <CountUp end={1112058} duration={5} delay={5} />
                  <p>No of Lines written on Github</p>
                  <p className="text-muted">as of 11 Jan 2021</p>
                </div>
              </div>
              <div className="col-sm-4 py-4">
                <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                  <CountUp end={10} duration={5} delay={5} /> <span>+</span>
                  <p>Projects</p>
                  <p className="text-muted">as of 11 Jan 2021</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Github;
