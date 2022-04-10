import React from "react";
import { useState, createContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
  const [projects] = useState([
    {
      id: "auv",
      name: "AUV-IIITDM",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/auv_FR1HUEv80j.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170738839",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/auv_eLHyBxXD_.png?updatedAt=1627449817894",
      description:
        "I got commissioned to build a website for IIITDM Kancheepuram's AUV Society. AUV society consists of an interdisciplinary team of undergraduate engineers working to construct an autonomous underwater vehicle for various underwater robotics competitions. I was the sole developer and designer until completion. I had to showcase their achievements, accolades, blogs and lure more sponsors. Furthermore, I have created an API to send form responses through the mail.",
      techstack: ["React", "NodeJS", "Nodemailer", "Adobe XD", "Bootstrap"],
      deploy: true,
      deployment: "https://auviiitdm.github.io/",
      code: "https://github.com/shelcia/auv",
    },
    {
      id: "crm",
      name: "Customer Relations Management",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/crm_uKw6Q4TSc_B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170739143",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/crm_9HCSuqfES.png?updatedAt=1627449818757",
      description:
        "CRM is an open-source project focusing on the management of leads and service requests. Customer Relationship Management is one of many approaches that allow a company to manage and analyse its interactions with its past, current and potential customers. It depends on three roles that exist in any company and their interaction with one another.",
      techstack: ["React", "MongoDB", "NodeJS", "ExpressJs", "Bootstrap"],
      deploy: true,
      deployment: "https://freee-crm.netlify.app/",
      code: "https://github.com/shelcia/CRM",
    },
    {
      id: "weatherapp",
      name: "Weather App",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/weather-app_eqaXO8qfP0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170736630",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/weather-app_UBPTt3MeyfH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170459499",
      description:
        "Weather App uses Open Weather API and Rest Countries API to build an interface that allows the users to see current weather conditions in almost every part of the world and contains general details of all countries. ",
      techstack: ["React", "Bootstrap"],
      deploy: true,
      deployment: "https://weatherups.netlify.app/",
      code: "https://github.com/shelcia/Weather-app",
    },
    {
      id: "samgatha",
      name: "Samgatha",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/samgatha_zfGoNnO-Sfq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170735314",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/samgatha_fGPvUsO2e.png?updatedAt=1627449846491",
      description:
        "I was part of the web development team (consisting of two members) who built the website for the college fest of IIITDM. We used Bootstrap for the frontend and NodeJS for the backend. The design focused on the theme DREAM. We used Nodejs to fetch event data from the database.",
      deploy: true,
      techstack: ["Bootstrap", "MongoDB", "NodeJS"],
      deployment: "http://samgatha2020.herokuapp.com/",
      code: "https://github.com/shelcia/Samgatha-2020",
    },
    {
      id: "chatapp",
      name: "Web Chat App",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/chatapp_T5xny4qw9wL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170736150",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/chat_KfOjmNmgm.png?updatedAt=1627449817973",
      description:
        "Chat-app brings most of the chat features without any signup requirements. It got features to create multiple chat rooms with plenty of users with emoji enabled input pop up. Chat-app is also secure as we don't store your messages.",
      techstack: ["React", "NodeJS", "Socket.io", "Bootstrap"],
      deploy: true,
      deployment: "https://freee-chatapp.netlify.app/",
      code: "https://github.com/shelcia/chat-app-frontend",
    },
    {
      id: "kaagitham",
      name: "Kaagitham",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/google-docs_DJlIfQL0um.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170735255",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/kaagitham_-rBC168wpp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1627452470163",
      description:
        "Kaagitham allows users to create drafts and share them seamlessly. The interface also allows sharing code snippets and huge documents with media content with which multiple users can collaboratively work. It also has features to view edit history, auto-saving and a comment section for easy interaction. I am working on adding more features as well.",
      techstack: ["React", "NodeJS", "Socket.io", "Material UI", "Quill.js"],
      deploy: false,
      deployment: "https://whatsapp-clone-socketio.netlify.app/",
      code: "https://github.com/shelcia/googledocsclone",
    },
    {
      id: "socialgram",
      name: "Social Gram",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/socialgram_wp_ZIzIQGA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170737396",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/socialgram_UVR7P_wtx.png?updatedAt=1627452473359",
      description:
        "Social gram is a social website that allows users to tweet and react to tweets. It also allows users to comment anonymously. I am working on adding more features as well.",
      techstack: ["React", "MongoDB", "NodeJS", "ExpressJS", "Redux"],
      deploy: true,
      deployment: "https://socialgram.netlify.app/",
      code: "https://github.com/shelcia/Socialgram",
    },
    {
      id: "bloggram",
      name: "Bloggram",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/bloggram_MNEIxWCSV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649611643446",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/bloggram_sI3LlPN0t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649611517394",
      description:
        "As part of my hobby projects, I created a blog social website where users can edit, add and delete blogs. It has got features where all blogs are segregated into major categories, like, dislike and add hearts to blog, separate comment section/discussion for users in all blogs and UI will be an eye treat for black and white lovers.",
      techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
      deploy: true,
      deployment: "https://bloggram-beta.vercel.app/",
      code: "https://github.com/shelcia/Blog-website",
    },

    {
      id: "slidingpuzzle",
      name: "Sliding Puzzle",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/sliding-puzzle_KOQ1HfrAF8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170737619",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/sliding-puzzle_HshtnrLlbGa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170346800",
      description:
        "A sliding puzzle, sliding block puzzle, or sliding tile puzzle is a combination puzzle that challenges a player to slide (frequently flat) pieces along particular routes (usually on a board) to establish an end configuration. This fun game consists of three difficulty levels to test your brain.",
      techstack: ["Vanilla JS", "HTML", "CSS"],
      deploy: true,
      deployment: "https://sliding-puzzle-basic.netlify.app/",
      code: "https://github.com/shelcia/sliding-puzzle",
    },
    {
      id: "noobcodes",
      name: "Noob Codes",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/noobcodes_9V2BhFCKA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648374969800",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/noobcodes_xhCF7dQX1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648373850224",
      description:
        "Noobcodes aims to simplify data structures and algorithms in Python(Interview Questions).",
      techstack: ["React", "Docusauras"],
      deploy: true,
      deployment: "https://noobcodes-docs.netlify.app/",
      code: "https://github.com/shelcia/noobcodes-docs",
    },
    // {
    //   id: "edith",
    //   name: "Edith Form",
    //   image:
    //     "https://cdn.discordapp.com/attachments/795010536365752320/809149054801149962/form.png",
    //   description:
    //     "A client project where in a form customized for college students to participate in Hidden Flag competition within a time window.  Admin dashboard has been built within for evaluation with time stamps for every submission made.",
    //   techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
    //   deploy: true,
    //   deployment: "https://edith-club-form.netlify.app/",
    //   code: "https://github.com/shelcia/Edith",
    // },
    {
      id: "irul-theme",
      name: "Irul Theme",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/irul-theme_jpxcz8EG7v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170735788",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/irultheme_lCGSTTLPr.png?updatedAt=1627452469440",
      description:
        "IRUL means Dark in Tamil. Irul theme is a Dark Minimal Theme for VS Code Based on Halcyon colour pallette. It aims to be aesthetic and easy on the eyes for long coding sessions. As of now, three versions of the IRUL theme is available in VS Code marketplace.",
      techstack: ["JSON"],
      deploy: true,
      deployment:
        "https://marketplace.visualstudio.com/items?itemName=shelcia.irul-theme",
      code: "https://github.com/shelcia/irul-theme",
    },
    {
      id: "dynamicportfolio",
      name: "Dynamic Portfolio Maker",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/dynamic-portfolio_7DkpKM3dTpj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170738187",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/portfolio_8XsHydYxh.png?updatedAt=1627452471747",
      description:
        "Illaka aims to create a dynamic portfolio website based on the prebuilt theme in under five minutes. The website will also have hosting capabilities. Users don't require any expertise in coding to create their portfolios.",
      techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
      deploy: false,
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
