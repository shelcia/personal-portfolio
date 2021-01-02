import React from "react";
import { useState, createContext } from "react";
import AUV from "../assets/project/AUV.png";
import Socialgram from "../assets/project/Socialgram.png";
import Samgatha from "../assets/project/Samgatha.png";
import CRM from "../assets/project/CRM.png";
import ChatApp from "../assets/project/ChatApp.png";
import WeatherApp from "../assets/project/WeatherApp.png";
import SlidingPuzzle from "../assets/project/SlidingPuzzle.png";
import Bloggram from "../assets/project/Bloggram.png";
import DocsClone from "../assets/project/DocsClone.png";

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
  const [projects] = useState([
    {
      id: "auv",
      name: "AUV-IIITDM",
      image: AUV,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795010664023851018/AUV.png",
      description:
        "I was commissioned to build a website for IIITDM Kancheepuram's AUV Society. AUV society consists of an intellectual interdisciplinary team of undergraduate engineers working to build an autonomous underwater vehicle for various underwater robotics competitions. I was the sole developer and designer until completion. I had to showcase their achievements, accolades, blogs and lure more sponsors. I have also created an API to send form responses through the mail.",
      techstack: ["React", "NodeJS", "Nodemailer", "Adobe XD", "Bootstrap"],
      deploy: true,
      deployment: "https://auviiitdm.github.io/",
      code: "https://github.com/shelcia/auv",
    },
    {
      id: "crm",
      name: "Customer Relations Management",
      image: CRM,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795010666737303582/CRM.png",
      description:
        "This is my first attempt in building an open-source project focusing on CRM. Customer Relationship Management is one of many different approaches that allow a company to manage and analyse its interactions with its past, current and potential customers.",
      techstack: ["React", "MongoDB", "NodeJS", "ExpressJs", "Bootstrap"],
      deploy: true,
      deployment: "https://freee-crm.netlify.app/",
      code: "https://github.com/shelcia/crm-frontend",
    },
    {
      id: "weatherapp",
      name: "Weather App",
      image: WeatherApp,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795016629385560084/WeatherApp.png",
      description: `I have used Open Weather API and Rest Countries API to build a weather app which allows user to see current weather conditions in almost every part of the world and also contains general details of all countries.`,
      techstack: ["React", "Bootstrap"],
      deploy: true,
      deployment: "https://react-weather-app-shelcia.netlify.app/",
      code: "https://github.com/shelcia/countries",
    },
    {
      id: "samgatha",
      name: "Samgatha",
      image: Samgatha,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795010666737303582/Samgatha.png",
      description:
        "I was part of the web development team (consisting of two members) which built the website for college fest of IIITDM. We used Bootstrap for frontend and NodeJS for the backend. The design is based on the theme DREAM. We used backend to fetch event data from the database.",
      deploy: true,
      techstack: ["Bootstrap", "MongoDB", "NodeJS"],
      deployment: "http://www.samgatha.live/",
      code: "https://github.com/shelcia/Samgatha-2020",
    },
    {
      id: "chatapp",
      name: "Web Chat App",
      image: ChatApp,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795010666737303582/ChatApp.png",
      description:
        "As a part of hobby project I tried recreating Whatsapp web using socket.io. It has features like mulitple chat rooms , emoji enabled input box (and emoji popup keyboard) and no signup requirements.",
      techstack: ["React", "NodeJS", "Socket.io", "Bootstrap"],
      deploy: true,
      deployment: "https://whatsapp-clone-socketio.netlify.app/",
      code: "https://github.com/shelcia/chat-app-frontend",
    },
    {
      id: "googledocsclone",
      name: "Google Docs Clone",
      image: DocsClone,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795010666737303582/DocsClone.png",
      description:
        "As a part of hobby project I tried recreating GoogleDocs using socket.io. It has features like live editing , formatting and automatic save as of now. I am still working on it's other features.",
      techstack: ["React", "NodeJS", "Socket.io", "Bootstrap", "Slate.js"],
      deploy: false,
      deployment: "https://whatsapp-clone-socketio.netlify.app/",
      code: "https://github.com/shelcia/googledocsclone",
    },
    {
      id: "socialgram",
      name: "Social Gram",
      image: Socialgram,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795010666737303582/Socialgram.png",
      description:
        "As part of my hobby projects, I challenged myself with creating a Facebook clone, which allows the user to create a post and like them. I will be adding more features in future.",
      techstack: ["React", "MongoDB", "NodeJS", "ExpressJS", "Redux"],
      deploy: true,
      deployment: "https://fb-clone-frontend.netlify.app/",
      code: "https://github.com/shelcia/fb-clone",
    },
    {
      id: "bloggram",
      name: "Bloggram",
      image: Bloggram,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795016631042179122/Bloggram.png",
      description:
        "As part of my hobby projects, I created a blog social website where users can edit, add and delete blogs. It has got features where all blogs are put into majoy categories, like, dislike and add hearts to blog, seperate comment section/discussion for users in all blogs and UI will be an eye treat for black and white lovers.",
      techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
      deploy: true,
      deployment: "https://bloggram.netlify.app/",
      code: "https://github.com/shelcia/Blog-website",
    },
    // {
    //   id: "todoapp",
    //   name: "Todo App",
    //   image: "/static/media/AUV.3122373e.png",
    //   description:
    //     "Modern Todo App has a colourful UI to keep track of users schedule. It also enables the feature where the user can know how long the user took time to complete the task.",
    //   techstack: "React , Bootstrap, NodeJS, MongoDB",
    //   deploy: true,
    //   deployment: "https://hubstaff-clone.netlify.app/",
    //   code: "https://github.com/shelcia/hubstaffclone-frontend",
    // },
    {
      id: "slidingpuzzle",
      name: "Sliding Puzzle",
      image: SlidingPuzzle,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795016627066372126/SlidingPuzzle.png",
      description:
        "A sliding puzzle, sliding block puzzle, or sliding tile puzzle is a combination puzzle that challenges a player to slide (frequently flat) pieces along certain routes (usually on a board) to establish a certain end-configuration. The pieces to be moved may consist of simple shapes, or they may be imprinted with colours, patterns, sections of a larger picture (like a jigsaw puzzle), numbers, or letters.",
      techstack: "Vanilla JS, HTML/CSS",
      deploy: true,
      deployment: "https://shelcia.github.io/sliding-puzzle/",
      code: "https://github.com/shelcia/sliding-puzzle",
    },
    // {
    //   id: "tictactoe",
    //   name: "Tic Tac Toe",
    //   image: "/static/media/AUV.3122373e.png",
    //   description:
    //     "Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
    //   techstack: "Typescript",
    //   deploy: true,
    //   deployment: "https://typescript-tic-tac-toe.netlify.app/",
    //   code: "https://github.com/shelcia/typescript-tic-tac-toe",
    // },
    // {
    //   id: "cricket",
    //   name: "Cricket Game",
    //   image: "/static/media/AUV.3122373e.png",
    //   description: "Cricket game made with typescript",
    //   techstack: "Typescript",
    //   deploy: true,
    //   deployment: "https://cricket-game-typescript.netlify.app/",
    //   code: "https://github.com/shelcia/cricket-game",
    // },
  ]);
  return (
    <ProjectsContext.Provider value={projects}>
      {props.children}
    </ProjectsContext.Provider>
  );
};
