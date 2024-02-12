import React from "react";
import ScrollerImg from "../../assets/images/images/scroller.webp";

const Scroller: React.FC = () => {
  return (
    <>
      <img
        src={ScrollerImg}
        alt="scroller"
        style={{ position: "absolute", top: 24, right: -15 }}
        height={300}
        width={30}
      />
    </>
  );
};

export default Scroller;
