import React from "react";
import PDFViewer from "pdf-viewer-reactjs";
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

        <PDFViewer
          document={{
            url: "/static/media/Shelcia_Resume.7ac723c5.pdf",
          }}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
