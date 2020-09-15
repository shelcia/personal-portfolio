import React from "react";
import { useState, createContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
  const [projects] = useState([
    {
      id: "crm",
      name: "Customer Relations Management",
      description:
        "This is my first attempt in building an open-source project focusing on CRM. Customer Relationship Management is one of many different approaches that allow a company to manage and analyse its interactions with its past, current and potential customers.",
      techstack: "React, MongoDB, NodeJS, ExpressJs, Bootstrap",
      deploy: true,
      deployment: "https://freee-crm.netlify.app/",
      code: "https://github.com/shelcia/crm-frontend",
    },
    {
      id: "weatherapp",
      name: "Weather App",
      description: `I have used Open Weather API and Rest Countries API to build a weather app which allows user to see current weather conditions in almost every part of the world and also contains general details of all countries.`,
      techstack: "React, Bootstrap",
      deploy: true,
      deployment: "https://react-weather-app-shelcia.netlify.app/",
      code: "https://github.com/shelcia/countries",
    },
    {
      id: "samgatha",
      name: "Samgatha",
      description:
        "I was part of the web development team (consisting of two members) which built the website for college fest of IIITDM. We used Bootstrap for frontend and NodeJS for the backend. The design is based on the theme DREAM. We used backend to fetch event data from the database.",
      deploy: true,
      techstack: "Bootstrap, MongoDB, NodeJS",
      deployment: "http://www.samgatha.live/",
      code: "https://github.com/shelcia/Samgatha-2020",
    },
    {
      id: "auv",
      name: "AUV-IIITDM",
      description:
        "I was commissioned to build a website for IIITDM Kancheepuram's AUV Society. AUV society consists of an intellectual interdisciplinary team of undergraduate engineers working to build an autonomous underwater vehicle for various underwater robotics competitions. I was the sole developer and designer until completion. I had to showcase their achievements, accolades, blogs and lure more sponsors. I have also created an API to send form responses through the mail.",
      techstack: "React, NodeJS, Nodemailer, Adobe XD, Bootstrap",
      deploy: true,
      deployment: "https://auv-iiitdm.netlify.app/",
      code: "https://github.com/shelcia/auv",
    },
    {
      id: "fbclone",
      name: "Facebook Clone",
      description:
        "As part of my hobby projects, I challenged myself with creating a Facebook clone, which allows the user to create a post and like them. I will be adding more features in future.",
      techstack: "React, MongoDB, NodeJS, ExpressJS, Redux",
      deploy: true,
      deployment: "https://fb-clone-frontend.netlify.app/",
      code: "https://github.com/shelcia/fb-clone",
    },
    {
      id: "todoapp",
      name: "Todo App",
      description:
        "Modern Todo App has a colourful UI to keep track of users schedule. It also enables the feature where the user can know how long the user took time to complete the task.",
      techstack: "React , Bootstrap, NodeJS, MongoDB",
      deploy: true,
      deployment: "https://hubstaff-clone.netlify.app/",
      code: "https://github.com/shelcia/hubstaffclone-frontend",
    },
    {
      id: "slidingpuzzle",
      name: "Sliding Puzzle",
      description:
        "A sliding puzzle, sliding block puzzle, or sliding tile puzzle is a combination puzzle that challenges a player to slide (frequently flat) pieces along certain routes (usually on a board) to establish a certain end-configuration. The pieces to be moved may consist of simple shapes, or they may be imprinted with colours, patterns, sections of a larger picture (like a jigsaw puzzle), numbers, or letters.",
      techstack: "Vanilla JS, HTML/CSS",
      deploy: true,
      deployment: "https://shelcia.github.io/sliding-puzzle/",
      code: "https://github.com/shelcia/sliding-puzzle",
    },
    {
      id: "tictactoe",
      name: "Tic Tac Toe",
      description:
        "Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
      techstack: "Typescript",
      deploy: true,
      deployment: "https://typescript-tic-tac-toe.netlify.app/",
      code: "https://github.com/shelcia/typescript-tic-tac-toe",
    },
    {
      id: "cricket",
      name: "Cricket Game",
      description: "Cricket game made with typescript",
      techstack: "Typescript",
      deploy: true,
      deployment: "https://cricket-game-typescript.netlify.app/",
      code: "https://github.com/shelcia/cricket-game",
    },
  ]);
  return (
    <ProjectsContext.Provider value={projects}>
      {props.children}
    </ProjectsContext.Provider>
  );
};
