import React from "react";

const Ongoing = () => {
  return (
    <React.Fragment>
      <h4 className="subheading mt-5">On Going Projects</h4>
      <hr />
      <div className="card-deck mb-5">
        <div className="card" id="soleflow">
          Soleflow
        </div>
        <div className="card" id="chatapp">
          Chat App
        </div>
        <div className="card" id="socialgram">
          Social Gram
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Ongoing;
