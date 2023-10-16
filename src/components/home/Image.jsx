import React from "react";

const Image = ({ image }) => {
  return (
    <React.Fragment>
      <img src={image} alt="project-img" width="100%" height="auto" />
      {/* <section
        className="c-glitch"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="c-glitch__img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className="c-glitch__img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className="c-glitch__img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className="c-glitch__img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className="c-glitch__img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </section> */}
    </React.Fragment>
  );
};

export default Image;
