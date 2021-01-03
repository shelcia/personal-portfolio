import React from "react";

const GlowText = ({ first, second, third, fourth }) => {
  return (
    <React.Fragment>
      <div className="sign">
        <span className="fast-flicker">{first}</span>
        {second}
        <span className="flicker">{third}</span>
        {fourth}
      </div>
    </React.Fragment>
  );
};

export default GlowText;
