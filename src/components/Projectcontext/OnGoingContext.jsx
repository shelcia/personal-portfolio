import React from "react";
import { useState, createContext } from "react";

export const OnGoingContext = createContext();

export const OnGoingProvider = (props) => {
  const [ongoing] = useState([
    {
      id: "11",
      name: "AUV- IIITDM",
      description:
        "I was commisioned to build website for college AUV community",
      deploy: false,
      deployment: "",
      code: "https://github.com/shelcia/auv",
    },
    {
      id: "12",
      name: "SoleFlow",
      description:
        "I was commisioned to build website interface to create chat bots",
      deploy: false,
      deployment: "",
      code: "https://github.com/shelcia/soleflowintern",
    },
    {
      id: "13",
      name: "Social gram",
      description:
        "As Part of Hobby Project i am builidng a social app in react",
      deploy: false,
      deployment: "",
      code: "https://github.com/shelcia/social-web",
    },
  ]);
  return (
    <OnGoingContext.Provider value={ongoing}>
      {props.children}
    </OnGoingContext.Provider>
  );
};
