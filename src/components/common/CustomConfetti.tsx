import React from "react";
import Confetti from "react-confetti";

interface CustomConfettiProps {
  numberOfPieces: number;
}

const CustomConfetti: React.FC<CustomConfettiProps> = () => {
  //   const { width, height } = useWindowSize();
  return <Confetti width={window.innerWidth} height={window.innerHeight} />;
};

export default CustomConfetti;
