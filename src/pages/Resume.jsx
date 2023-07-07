import React from "react";
import Footer from "../components/common/Footer";

const ContactPage = () => {
  return (
    <React.Fragment>
      <div className="container page-fade">
        <h1 className="subtitle">Resume</h1>
        <div className="text-center mb-5">
          <a
            href="https://drive.google.com/file/d/1WN41TkrAM-qYjGTYjk0qNQZiQeTCq0fG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              Download PDF <i className="fas fa-download"></i>
            </button>
          </a>
          <p>Size: 115 Kb</p>
        </div>
        <div className="text-center mb-5">
          <img
            src="https://ik.imagekit.io/shelcia/my_portfolio/resume/Shelcia-Resume_xiXBro_lU.png?updatedAt=1688707971688"
            alt=""
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
