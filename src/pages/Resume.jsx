import React from "react";
import Resume from "../assets/Shelcia_Resume.pdf";
import Footer from "../partials/Footer";

const Contact = () => {
  console.log(Resume);

  return (
    <React.Fragment>
      <div className="container page-fade">
        <h1 className="subtitle">Resume</h1>
        <div className="text-center mb-5">
          <a href="/static/media/Shelcia_Resume.7ac723c5.pdf" target="blank">
            <button className="button">
              Download PDF <i className="fas fa-download"></i>
            </button>
          </a>
          <p>Size: 111 Kb</p>
        </div>
        <div className="w-75 mx-auto mb-5">
          <img
            src="https://cdn.discordapp.com/attachments/795010536365752320/799057911669981184/Shelcia_Resume-1.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
