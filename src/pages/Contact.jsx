import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container page-fade">
        <h1 className="glitch" data-text="Contact">
          Contact
        </h1>
        <p>
          Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
          congue. In bibendum vestibulum orci et feugiat.
        </p>
        <PDFViewer
          document={{
            url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Contact;
