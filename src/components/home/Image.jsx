import React from "react";

const Image = ({ image }) => {
  return (
    <React.Fragment>
      <div className="c-glitch" style={{ backgroundImage: `url(${image})` }}>
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
      </div>
    </React.Fragment>
  );
};

export default Image;
