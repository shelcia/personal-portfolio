import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../assets/illustration.png";

const Error = () => {
  return (
    <React.Fragment>
      <div className="container" style={{ marginTop: "15vh" }}>
        <ScrollAnimation animateIn="slideInUp">
          <div className="box">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src={Illustration}
                  alt="error404"
                  className="illustration img-fluid"
                />
              </div>
              <div className="col-sm-6 d-flex align-items-center justify-content-center">
                <div className=" card error-card">
                  <div className="card-body">
                    <h4 className="mb-5">404 Error.</h4>
                    <p className="mb-2">
                      Oops. seems like you are lost xP. Anyway you can go back
                      to Home page
                    </p>
                    <Link to="/" className="text-decoration-none text-dark">
                      Go back to home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </React.Fragment>
  );
};

export default Error;
