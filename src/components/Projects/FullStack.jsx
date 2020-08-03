import React from "react";

const FullStack = ({ setView }) => {
  return (
    <React.Fragment>
      <div className="col-sm-2">
        <div className="nav">
          <p className="active">Full Stack</p>
          <p onClick={() => setView("uidesign")}>UI Design</p>
          <p onClick={() => setView("ongoing")}>On Going</p>
          <p onClick={() => setView("design")}>Design</p>
        </div>
      </div>
      <div className="col-sm-10">
        <div className="container">
          <div className="row">
            <div className="card">hi</div>
            <div className="card">hi</div>
            <div className="card">hi</div>
          </div>
          <div className="row">
            <div className="card">hi</div>
            <div className="card">hi</div>
            <div className="card">hi</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FullStack;
