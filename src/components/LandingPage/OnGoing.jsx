import React from "react";

const Ongoing = () => {
  return (
    <React.Fragment>
      <h4 className="subheading mt-5">On Going Projects</h4>
      <hr />
      <div className="card-deck mb-5">
        <div className="card" id="soleflow">
          <p>Soleflow</p>
        </div>
        <div className="card" id="chatapp">
          <p>Corona Dashboard</p>
        </div>
        <div className="card" id="socialgram">
          <p>Online Code Editor</p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Ongoing;
