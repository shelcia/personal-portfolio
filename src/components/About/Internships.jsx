import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Internships = () => {
  return (
    <React.Fragment>
      <ScrollAnimation animateIn="fadeInUp">
        <h4 className="subheading mt-5 mb-5">Internships</h4>
        <h6 className="mt-3 mb-3 subtitle">
          Solera Life Science Private Limited
        </h6>
        <p className="mt-3 mb-5">
          I am currently working as a website developer and designer building a
          couple of products. One of them is basically an E-commerce app for
          Pharma products and another product is based on building chatbot
          interface (familiar example DialogueFlow).
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <h6 className="mt-3 mb-3 subtitle">National University of Singapore</h6>
        <p className="mt-3 mb-3">
          I was involved in an academic internship in Singapore. Over there I
          had a handful of experience in networking architecture, building
          security-focused on IoT systems. I built two projects, one was based
          IOT based Disaster management system under the guidance of Professor
          Tan Wee Kek and the second project was based on visualising data in
          the admin Dashboard under the guidance of Mr Shanthanu Pandey, Hewlett
          Packard.
        </p>
      </ScrollAnimation>
    </React.Fragment>
  );
};

export default Internships;
