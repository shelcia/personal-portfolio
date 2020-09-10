import React from "react";

const Ongoing = () => {
  return (
    <React.Fragment>
      <h4 className="subheading mt-5">On Going Projects</h4>
      <hr />
      <div className="row">
        <div className="col-sm-4">
          <div className="card" id="soleflow">
            Soleflow
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" id="chatapp">
            Chat App
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" id="socialgram">
            Social Gram
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ongoing;
