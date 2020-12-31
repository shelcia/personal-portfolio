import React from "react";
import PDFViewer from "pdf-viewer-reactjs";
import Resume from "../assets/Shelcia_Resume.pdf";

const Contact = () => {
  console.log(Resume);

  return (
    <React.Fragment>
      <div className="container page-fade">
        <h1 className="glitch" data-text="Resume">
          Resume
        </h1>
        <div className="text-center">
          <a href="/static/media/Shelcia_Resume.7ac723c5.pdf" target="blank">
            <button className="btn mb-5">
              <div className="btn-text">Download PDF</div>
            </button>
          </a>
        </div>

        <PDFViewer
          document={{
            url: "/static/media/Shelcia_Resume.7ac723c5.pdf",
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Contact;