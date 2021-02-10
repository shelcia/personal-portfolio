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
        "https://cdn.discordapp.com/attachments/795010536365752320/795039511368171540/AUV.png",
      description:
        "I was commissioned to build a website for IIITDM Kancheepuram's AUV Society. AUV society consists of an intellectual interdisciplinary team of undergraduate engineers working to build an autonomous underwater vehicle for various underwater robotics competitions. I was the sole developer and designer until completion. I had to showcase their achievements, accolades, blogs and lure more sponsors. Furthermore, I have also created an API to send form responses through the mail.",
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
        "https://cdn.discordapp.com/attachments/795010536365752320/795040076366741564/CRM.png",
      description:
        "This is my first attempt in building an open-source project focusing on CRM. Customer Relationship Management is one of many approaches that allow a company to manage and analyse its interactions with its past, current and potential customers.",
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
      description: `I have used Open Weather API and Rest Countries API to build a weather app which allows user to see current weather conditions in almost every part of the world and also contain general details of all countries.`,
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
        "https://cdn.discordapp.com/attachments/795010536365752320/795036237948911646/Samgatha.png",
      description:
        "I was part of the web development team (consisting of two members) which built the website for college fest of IIITDM. We used Bootstrap for frontend and NodeJS for the backend. The design is based on the theme DREAM. We used the backend to fetch event data from the database.",
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
        "https://cdn.discordapp.com/attachments/795010536365752320/795035633214947359/Whatsapp.png",
      description:
        "For a hobby project I tried recreating WhatsApp web using socket.io. It has got features like multiple chat rooms, emoji enabled input box (and emoji pop up keyboard) and no sign up requirements. Also secure :).",
      techstack: ["React", "NodeJS", "Socket.io", "Bootstrap"],
      deploy: true,
      deployment: "https://freee-chatapp.netlify.app/",
      code: "https://github.com/shelcia/chat-app-frontend",
    },
    {
      id: "googledocsclone",
      name: "Google Docs Clone",
      image: DocsClone,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795037102919778324/DocsClone.png",
      description:
        "For a hobby project I tried recreating Google Docs using socket.io. It has features like live editing, formatting and automatic save as of now. I am still working on it's other features.",
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
        "https://cdn.discordapp.com/attachments/795010536365752320/795040698654261268/Socialgram.png",
      description:
        "As part of my hobby projects, I challenged myself with creating a social website clone, which allows the user to create a post and react or comment to them anonymously. I will be adding more features in future.",
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
        "As part of my hobby projects, I created a blog social website where users can edit, add and delete blogs. It has got features where all blogs are segregated into major categories, like, dislike and add hearts to blog, separate comment section/discussion for users in all blogs and UI will be an eye treat for black and white lovers.",
      techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
      deploy: true,
      deployment: "https://bloggram.netlify.app/",
      code: "https://github.com/shelcia/Blog-website",
    },

    {
      id: "slidingpuzzle",
      name: "Sliding Puzzle",
      image: SlidingPuzzle,
      imageURL:
        "https://cdn.discordapp.com/attachments/795010536365752320/795016627066372126/SlidingPuzzle.png",
      description:
        "A sliding puzzle, sliding block puzzle, or sliding tile puzzle is a combination puzzle that challenges a player to slide (frequently flat) pieces along certain routes (usually on a board) to establish a certain end-configuration. The pieces to be moved may consist of simple shapes, or they may be imprinted with colours, patterns, sections of a larger picture (like a jigsaw puzzle), numbers, or letters.",
      techstack: ["Vanilla JS", "HTML", "CSS"],
      deploy: true,
      deployment: "https://shelcia.github.io/sliding-puzzle/",
      code: "https://github.com/shelcia/sliding-puzzle",
    },
    {
      id: "noobcodes",
      name: "Noob Codes",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/809149057624309810/noobcodes.png",
      description:
        "Full-stack Project developed to simplify data structures and algorithms in Python with dynamic content which could be updated from inbuilt admin dashboard.",
      techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
      deploy: true,
      deployment: "https://noobcodes.netlify.app/",
      code: "https://github.com/shelcia/noobcodes",
    },
    {
      id: "edith",
      name: "Edith Form",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/809149054801149962/form.png",
      description:
        "A client project where in a form customized for college students to participate in Hidden Flag competition within a time window.  Admin dashboard has been built within for evaluation with time stamps for every submission made.",
      techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
      deploy: true,
      deployment: "https://edith-club-form.netlify.app/",
      code: "https://github.com/shelcia/Edith",
    },
    {
      id: "dynamicportfolio",
      name: "Dynamic Portfolio Maker",
      image:
        "https://cdn.discordapp.com/attachments/795010536365752320/809149052293087252/dynamic-portfolio.png",
      description:
        "An Ongoing project concentrating on creating a ready-made portfolio website with hosting just under 5 minutes without any prior knowledge of coding.",
      techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
      deploy: true,
      deployment: "https://dynamic-portfolio.netlify.app/",
      code: "https://github.com/shelcia/dynamic-portflio",
    },
  ]);
  return (
    <ProjectsContext.Provider value={projects}>
      {props.children}
    </ProjectsContext.Provider>
  );
};
