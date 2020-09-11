import React from "react";
import { useState, createContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
  const [projects] = useState([
    {
      id: "crm",
      name: "Customer Relations Management",
      description:
        "This is my first attempt in building a first open source project focusing on crm. Customer Relationship Management is one of many different approaches that allow a company to manage and analyse its own interactions with its past, current and potential customers.",
      techstack: "React, MongoDB, NodeJS, ExpressJs, Bootstrap",
      deploy: true,
      deployment: "https://crm-frontend-shelcia.netlify.app/",
      code: "https://github.com/shelcia/crm-frontend",
    },
    {
      id: "weatherapp",
      name: "Weather App",
      description: `I have used Open Weather API and Rest Countries API to build weather app which allows user to see current weather conditions in almost every part of the world and also contains general details of all countries.`,
      techstack: "React, Bootstrap",
      deploy: true,
      deployment: "",
      code: "https://github.com/shelcia/countries",
    },
    {
      id: "samgatha",
      name: "Samgatha",
      description:
        "I was part of the web development team (consisting of two members) which built website for college fest of IIITDM. We used Bootstrap for frontend and NodeJS for backend. The design is based on the theme DREAM. We used backend to fetch Event data from database.",
      deploy: true,
      techstack: "Bootstrap, MongoDB, NodeJS",
      deployment: "http://www.samgatha.live/",
      code: "https://github.com/shelcia/Samgatha-2020",
    },
    {
      id: "auv",
      name: "AUV-IIITDM",
      description:
        "I was commisioned to build website for IIITDM Kancheepuram's AUV Society. AUV society consist of intellectual interdisciplinary team of undergraduate engineers working to build an autonomous underwater vehicle for various underwater robotics competitions. I was a sole developer and designer until completion. I had to showcase their acheivements, accolades, blogs and lure more sponsors. I have also created API to send from responses through mail.",
      techstack: "React, NodeJS, Nodemailer",
      deploy: true,
      deployment: "https://auv-iiitdm.netlify.app/",
      code: "https://github.com/shelcia/auv",
    },
    {
      id: "fbclone",
      name: "Facebook Clone",
      description:
        "As part of my hobby projects, I challenged myself with creating facebook clone, which allows user to create post and like them. I will be adding more feautures in future",
      techstack: "React, MongoDB, NodeJS, ExpressJS, Redux",
      deploy: true,
      deployment: "https://fb-clone-frontend.netlify.app/",
      code: "https://github.com/shelcia/fb-clone",
    },
    {
      id: "todoapp",
      name: "Todo App",
      description:
        "Modern Todo App will colourful UI to keep track of users schedule. It also enables the feauture where user can know how long the user took time to complete the task",
      techstack: "React , Bootstrap",
      deploy: true,
      deployment: "https://hubstaff-clone.netlify.app/",
      code: "https://github.com/shelcia/hubstaffclone-frontend",
    },
  ]);
  return (
    <ProjectsContext.Provider value={projects}>
      {props.children}
    </ProjectsContext.Provider>
  );
};
