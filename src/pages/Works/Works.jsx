import React from "react";
import AUV from "../../assets/project/AUV.png";

const Works = () => {
  return (
    <React.Fragment>
      <div className="bg-2 h-80">
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-6 px-4">
              <img src={AUV} alt="" className="img-fluid" />
            </div>
            <div className="col-sm-6 px-4">
              <img src={AUV} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Works;
