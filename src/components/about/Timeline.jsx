import React from "react";
import { experience } from "../../context/ExperinceContext";
import ScrollAnimation from "react-animate-on-scroll";

const Timeline = () => {
  return (
    <>
      <div id="cd-timeline" className="cd-container mx-auto py-5 w-100">
        {experience.map((exp) => (
          <div className="cd-timeline-block" key={exp.name}>
            <ScrollAnimation animateIn="fadeInUp">
              <div className="cd-timeline-img cd-picture"></div>
              <div className="cd-timeline-content">
                <h4>{exp.name}</h4>
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title">
                    <i className="fas fa-laptop-code" />
                    <p className="d-inline">{exp.designation}</p>
                  </span>
                  <span className="timeline-content-info-date">
                    <i className="fas fa-calendar-alt" />
                    <p className="d-inline">{exp.year}</p>
                  </span>
                </div>
                <p>{exp.desc}</p>
                <span className="cd-date px-4">
                  <h4>{exp.date}</h4>
                </span>
                <ul className="content-skills">
                  {exp.skills.map((skill) => (
                    <li key={skill}>
                      <p className="d-inline m-0">{skill}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
