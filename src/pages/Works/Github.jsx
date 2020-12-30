import React from "react";
import CountUp from "react-countup";

const Github = () => {
  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="github-card shadow bg-2 p-5 rounded-lg text-center">
                <CountUp end={1540} duration={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Github;
