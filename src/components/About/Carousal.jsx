import React from "react";
import ReactIcon from "../../assets/skillicons/react.svg";
import NodeJs from "../../assets/skillicons/nodejs.png";
import Python from "../../assets/skillicons/python.png";
import JS from "../../assets/skillicons/javascript.png";
import MongoDB from "../../assets/skillicons/mongodb.png";
import CSS from "../../assets/skillicons/css.png";
import BS from "../../assets/skillicons/bootstrap.svg";
import MySql from "../../assets/skillicons/mysql.png";
import AdobeXD from "../../assets/skillicons/adobe-xd.png";
import Figma from "../../assets/skillicons/figma.png";
import C from "../../assets/skillicons/c.png";
import Cpluplus from "../../assets/skillicons/c++.png";

const Carousal = () => {
  return (
    <React.Fragment>
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={ReactIcon} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={NodeJs} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Python} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={JS} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={MongoDB} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={CSS} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={BS} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={MySql} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={AdobeXD} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Figma} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={C} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Cpluplus} alt="Third slide" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousal;
