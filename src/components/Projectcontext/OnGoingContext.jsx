import React from "react";
import { useState, createContext } from "react";

export const OnGoingContext = createContext();

export const OnGoingProvider = (props) => {
  const [ongoing] = useState([
    {
      id: "21",
      name: "SoleFlow",
      description:
        "I was commisioned to build website interface to create chat bots",
      techstack: "React , Bootstrap, NodeJS, MongoDB",
      deploy: false,
      deployment: "",
      code: "https://github.com/shelcia/soleflowintern",
    },
    {
      id: "22",
      name: "Social gram",
      description:
        "As Part of Hobby Project i am builidng a social app in react",
      techstack: "React , Bootstrap, NodeJS, MongoDB",
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
