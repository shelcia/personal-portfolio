import React from "react";
import CountUp from "react-countup";

const Github = () => {
  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container pt-5">
          <h1 className="subtitle">Github Numbers</h1>
          <div className="row mt-5">
            <div className="col-sm-4">
              <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                <CountUp end={1536} duration={5} delay={5} /> <span>+</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                <CountUp end={1112058} duration={5} delay={5} /> <span>+</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                <CountUp end={10} duration={5} delay={5} /> <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Github;
