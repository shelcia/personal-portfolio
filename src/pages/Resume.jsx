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
          <a href="/static/media/Shelcia_Resume.f98370c4.pdf" target="blank">
            <button className="button">
              Download PDF <i className="fas fa-download"></i>
            </button>
          </a>
          <p>Size: 115 Kb</p>
        </div>
        <div className="text-center mb-5">
          <img
            src="https://cdn.discordapp.com/attachments/795010536365752320/869646892684959774/Shelcia_Resume_.png"
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
