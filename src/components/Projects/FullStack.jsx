import React from "react";
import CRM from "../../assets/crm.JPG";
import ScrollAnimation from "react-animate-on-scroll";

const FullStack = ({ setView }) => {
  return (
    <React.Fragment>
      <div className="col-sm-2">
        <ScrollAnimation animateIn="fadeInLeft">
          <div className="nav">
            <p className="active">Full Stack</p>
            <p onClick={() => setView("uidesign")}>UI Design</p>
            <p onClick={() => setView("ongoing")}>On Going</p>
            <p onClick={() => setView("design")}>Design</p>
          </div>
        </ScrollAnimation>
      </div>
      <div className="col-sm-10">
        <ScrollAnimation animateIn="fadeInRight">
          <div className="container">
            <div className="row">
              <div className="card">
                <img src={CRM} alt="" />
                <div className="text-container">
                  <h2>CRM</h2>
                  <p>Full stack Project based on CRM with NodeJS and React</p>
                  <a href="https://github.com/shelcia/crm-frontend">Code</a>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default FullStack;
