import React from "react";
import Confetti from "react-confetti";

const CustomConfetti = () => {
  //   const { width, height } = useWindowSize();
  return <Confetti width={window.innerWidth} height={window.innerHeight} />;
};

export default CustomConfetti;
