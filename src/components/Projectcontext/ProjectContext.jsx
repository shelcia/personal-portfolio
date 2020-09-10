import React from "react";
import { useState, createContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
  const [projects] = useState([
    {
      id: "1",
      name: "Customer Relations Management",
      description: "Full stack Project based on CRM with NodeJS and React",
      deploy: false,
      deployment: "",
      code: "https://github.com/shelcia/crm-frontend",
    },
    {
      id: "31",
      name: "REST API Countries",
      description: "Project built using REST Countries API",
      deploy: false,
      deployment: "",
      code: "https://github.com/shelcia/countries",
    },
    {
      id: "32",
      name: "Samgatha",
      description:
        "I was commisioned to build website for college cultural fest",
      deploy: true,
      deployment: "http://www.samgatha.live/",
      code: "https://github.com/shelcia/Samgatha-2020",
    },
    {
      id: "2",
      name: "Rasa NLU",
      description:
        "I was commisioned to build Frontend Interface For NLU applications",
      deploy: false,
      deployment: "",
      code: "https://github.com/shelcia/rasanluinterface",
    },
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
    <ProjectsContext.Provider value={projects}>
      {props.children}
    </ProjectsContext.Provider>
  );
};
