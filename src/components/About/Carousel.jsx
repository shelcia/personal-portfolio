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

const Carousel = () => {
  return (
    <React.Fragment>
      <div
        id="carousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <img className="d-block w-75" src={ReactIcon} alt="First slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={NodeJs} alt="Second slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={Python} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={JS} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={MongoDB} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={CSS} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={BS} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={MySql} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={AdobeXD} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={Figma} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={C} alt="Third slide" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img className="d-block w-75" src={Cpluplus} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
