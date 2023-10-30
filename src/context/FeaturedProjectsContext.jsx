import React from "react";
import { useState, createContext } from "react";
// import MockerMockup from "../assets/images/mockups/mocker-mockup.png";
import MockerMockup from "../assets/images/mockups/mocker.png";
import SocialgramMockup from "../assets/images/mockups/socialgram.png";
import BloggramMockup from "../assets/images/mockups/bloggram.png";
import DynamicPortfolioMockup from "../assets/images/mockups/dynamicportfolio.png";

export const FeaturedProjectsContext = createContext();

export const FeaturedProjectsProvider = (props) => {
  const [projects] = useState([
    {
      id: "mocker",
      name: "Mocker",
      image: MockerMockup,
      desc: "Generate mockup data for testing and prototyping",
      techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
      deploy: true,
      forks: 19,
      stars: 12,
      deployment: "https://mocker-gen.netlify.app/",
      code: "https://github.com/shelcia/mocker",
    },
    {
      id: "socialgram",
      name: "Socialgram",
      image: SocialgramMockup,
      desc: "Seamless Social Website",
      techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
      deploy: true,
      forks: 19,
      stars: 12,
      deployment: "https://mocker-gen.netlify.app/",
      code: "https://github.com/shelcia/mocker",
    },
    {
      id: "bloggram",
      name: "Bloggram",
      image: BloggramMockup,
      desc: "Write, Read and Share Blogs",
      techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
      deploy: true,
      forks: 19,
      stars: 12,
      deployment: "https://mocker-gen.netlify.app/",
      code: "https://github.com/shelcia/mocker",
    },
    {
      id: "dynamic portfolio",
      name: "Dynamic Portfolio",
      image: DynamicPortfolioMockup,
      desc: "Build websites by filling up forms",
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
