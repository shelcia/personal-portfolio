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
          I am currently working as website developer and designer building
          couple of products. One of them Is basically a E-commerce app for
          Pharma products and other product is based on building chat bot
          interface (familiar example DialogueFlow)
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <h6 className="mt-3 mb-3 subtitle">
          National University of Singapore{" "}
        </h6>
        <p className="mt-3 mb-3">
          I was involved in academic internship in Singapore.Over there i had
          handful experience in networking architecture, building security
          focused on IOT systems. I built two projects, one was based IOT based
          Disaster management system and the second project was based on
          visualising data in admin Dashboard.
        </p>
      </ScrollAnimation>
    </React.Fragment>
  );
};

export default Internships;
