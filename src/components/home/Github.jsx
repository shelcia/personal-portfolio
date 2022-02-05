import React from "react";
import CountUp from "react-countup";

const Github = () => {
  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container pt-5">
          <h1 className="subtitle">Github Numbers</h1>
          <div className="row mt-5" data-aos="fade-up">
            <div className="col-sm-4 py-4">
              <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                <CountUp end={4100} duration={5} delay={5} /> <span>+</span>
                <p>Open Source Contributions</p>
                <p className="text-muted">as of 6 Feb 2022</p>
              </div>
            </div>
            <div className="col-sm-4 py-4">
              <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                <CountUp end={3112058} duration={5} delay={5} />
                <p>No of Lines written on Github</p>
                <p className="text-muted">as of 6 Feb 2022</p>
              </div>
            </div>
            <div className="col-sm-4 py-4">
              <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                <CountUp end={25} duration={5} delay={5} /> <span>+</span>
                <p>Projects</p>
                <p className="text-muted">as of 6 Feb 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Github;
