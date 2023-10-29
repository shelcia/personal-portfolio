import React from "react";
import { useState, createContext } from "react";
import MockerMockup from "../assets/images/mockups/mocker-mockup.png";

export const FeaturedProjectsContext = createContext();

export const FeaturedProjectsProvider = (props) => {
  const [projects] = useState([
    {
      id: "mocker",
      name: "Mocker",
      image: MockerMockup,
      desc: " Mocker desc one line",
      techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
      deploy: true,
      forks: 19,
      stars: 12,
      deployment: "https://mocker-gen.netlify.app/",
      code: "https://github.com/shelcia/mocker",
    },
    {
      id: "mocker",
      name: "Mocker",
      image: MockerMockup,
      desc: " Mocker desc one line",
      techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
      deploy: true,
      forks: 19,
      stars: 12,
      deployment: "https://mocker-gen.netlify.app/",
      code: "https://github.com/shelcia/mocker",
    },
    {
      id: "mocker",
      name: "Mocker",
      image: MockerMockup,
      desc: " Mocker desc one line",
      techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
      deploy: true,
      forks: 19,
      stars: 12,
      deployment: "https://mocker-gen.netlify.app/",
      code: "https://github.com/shelcia/mocker",
    },
  ]);

  return (
    <FeaturedProjectsContext.Provider value={projects}>
      {props.children}
    </FeaturedProjectsContext.Provider>
  );
};
