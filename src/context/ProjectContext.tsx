import React, { useState, createContext } from "react";
import { Project } from "../types";

type ProjectsContextType = Project[];

export const ProjectsContext = createContext<ProjectsContextType>([]);

type ProjectsProviderProps = {
  children: React.ReactNode;
};

export const ProjectsProvider: React.FC<ProjectsProviderProps> = (props) => {
  const [projects] = useState<Project[]>([
    {
      id: "mocker",
      name: "Mocker",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/mocker_FhIiA_GE6v.webp?updatedAt=1701194092672",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/mocker_c9ZHHjepY9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668874004199",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/mocker_g1ypry6O-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668873869830",
      // description:
      //   "Mocker can generate mock data with API endpoints, powered by faker.js",
      description:
        "Mocker is a tool that allows you to generate fake, or 'mock', data that can be used for testing or prototyping purposes. It uses a library called Faker.js, which generates fake data such as names, addresses, and phone numbers in a variety of formats. By creating an API endpoint, the tool enables users to create a mocked data set and use it for testing of applications or as a substitute for data that is not yet available in a development stage, also enable a client to test their apps and other functions, in a more realistic scenario.",
      techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
      deploy: true,
      // deployment: "https://mockapi-flax.vercel.app/",
      deployment: "https://mocker-gen.netlify.app/",
      code: "https://github.com/shelcia/mocker",
      forks: 19,
      stars: 12,
    },
    {
      id: "socialgram",
      name: "Social Gram",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/socialgram_l5y_mG4U0.webp?updatedAt=1701194091026",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/socialgram_QZZgEkKTJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668874113040",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/socialgram1_DKSivHFxu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668873869834",
      // description:
      //   "Social gram is a social website that allows users to tweet and react to tweets. It also allows users to comment anonymously. I am working on adding more features as well.",
      description:
        "Social Gram is a social media website that allows users to create and share content, similar to other popular platforms such as Twitter and Facebook. Users will be able to create posts, and share them with others. The platform also allows for users to react and engage with other user's content, such as by liking, commenting, or sharing. It is a social website with all basic features where users can share and react to the post with text and media. I am working on adding more features as well.",
      techstack: [
        "React",
        "Material UI",
        "MongoDB",
        "NodeJS",
        "ExpressJS",
        "Redux",
      ],
      deploy: true,
      deployment: "https://social--gram.vercel.app/",
      code: "https://github.com/shelcia/Socialgram",
      forks: 19,
      stars: 12,
    },
    {
      id: "bloggram",
      name: "Bloggram",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/bloggram_A0EkXwGxa.webp?updatedAt=1701194090975",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/bloggram_MNEIxWCSV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649611643446",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/bloggram_sI3LlPN0t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649611517394",
      description:
        "I have created a dynamic and interactive blog website as a hobby project. The feature of allowing users to edit, add, and react to blogs is a great way to make the platform more engaging and encourage user participation. Additionally, having separate comment sections or discussions for users across all blogs will also help foster a community and make it easier for users to engage with each other's ideas. The choice of a minimalistic UI will give the website clean and uncluttered appearance and also focuses on user experience. This type of blog website will be a great way for users to share their thoughts and ideas, as well as learn from others, it will be a great addition to the collection of personal projects.",
      // "As part of my hobby projects, I created a blog website where users can edit, add, react and delete blogs. It has got features where all blogs are segregated into major categories, like, dislike and add hearts to blog, separate comment section/discussion for users in all blogs and UI will be an eye treat for black and white lovers.",
      techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
      deploy: true,
      deployment: "https://bloggram-beta.vercel.app/",
      code: "https://github.com/shelcia/Blog-website",
      forks: 19,
      stars: 12,
    },
    {
      id: "dynamic-portfolio",
      name: "Dynamic Portfolio Maker",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/dynamicportfolio_H4yzvMebha.webp?updatedAt=1701194090908",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/dynamic_portfolio_OTIKucmwE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664985958085",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/dynamic-portfolio-demo_0mw4NjwRu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664985852086",
      description:
        "Dynamic Portfolio is a website building tool that allows users to create a website by filling out forms under five minutes. Instead of having to write code or use specialized software, users can use pre-built templates and input their own content using an intuitive user interface. This can make it faster and easier for people with limited technical experience to create a website. We currently have three templates.",
      techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
      deploy: true,
      deployment: "https://dynamic--portfolio.vercel.app/",
      code: "https://github.com/shelcia/dynamic-portflio",
      forks: 19,
      stars: 12,
    },
    {
      id: "kaagitham",
      name: "Kaagitham",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/kaagitham_h-mVtO9Y2.webp?updatedAt=1701194091006",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/google-docs_DJlIfQL0um.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170735255",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/kaagitham_-rBC168wpp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1627452470163",
      description:
        "Kaagitham allows users to create drafts and share them seamlessly. The interface also allows sharing code snippets and huge documents with media content with which multiple users can collaboratively work. It also has features to view edit history, auto-saving and a comment section for easy interaction. I am working on adding more features as well. Currently under construction",
      techstack: ["React", "NodeJS", "Socket.io", "Material UI", "Sun-Editor"],
      deploy: true,
      deployment: "https://kaagitham.vercel.app/",
      code: "https://github.com/shelcia/kaagitham",
      forks: 19,
      stars: 12,
    },

    {
      id: "noobcodes",
      name: "Noob Codes",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/noobcodes_GUzi7Ol86.webp?updatedAt=1701194091120",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/noobcodes_9V2BhFCKA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648374969800",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/noobcodes_xhCF7dQX1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648373850224",
      // description:
      //   "Noobcodes aims to simplify data structures and algorithms in Python(Interview Questions).",
      description:
        "NoobCodes is a website or platform that aims to simplify the study of data structures and algorithms in the Python programming language, particularly with the aim of preparing for technical interviews. It likely provides tutorials, examples, and practice problems to help users understand and implement common data structures and algorithms in a clear and straightforward way. The goal is to make it easier for people who are new to computer science or are preparing for an interview to learn these concepts and become more confident in their coding abilities.",
      techstack: ["React", "Docusauras", "Mdx"],
      deploy: true,
      deployment: "https://noobcodes-docs.netlify.app/",
      code: "https://github.com/shelcia/noobcodes-docs",
      forks: 19,
      stars: 12,
    },
    // {
    //   id: "crm",
    //   name: "Customer Relations Management",
    //   image:
    //     "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/easy-crm_aHBqFTQZ5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664985950850",
    //   imageURL:
    //     "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/easy-crm-demo_VvQCj-ocY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664985835427",
    //   description:
    //     "CRM is an open-source project focusing on the management of leads and service requests. Customer Relationship Management is one of many approaches that allow a company to manage and analyse its interactions with its past, current and potential customers. It depends on three roles that exist in any company and their interaction with one another. Currently under development",
    //   techstack: ["React", "MongoDB", "NodeJS", "ExpressJs", "Bootstrap"],
    //   deploy: true,
    //   deployment: "https://freee-crm.netlify.app/",
    //   code: "https://github.com/shelcia/CRM",
    // },
    // {
    //   id: "chatapp",
    //   name: "Web Chat App",
    //   image:
    //     "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/chatapp_T5xny4qw9wL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170736150",
    //   imageURL:
    //     "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/chat_KfOjmNmgm.png?updatedAt=1627449817973",
    //   // description:
    //   //   "Chat-app brings most of the chat features without any signup requirements. It got features to create multiple chat rooms with plenty of users with emoji enabled input pop up. Chat-app is also secure as we don't store your messages.",
    //   description:
    //     "Chat-app is a chat application that allows users to participate in multiple chat rooms without any signup requirements. The app includes features such as the ability to create multiple chat rooms, support for a large number of users in each room, and the ability to use emojis in chat messages. One of the notable feature is that, it is secure as it doesn't store the messages on any servers, which means the chat logs would be lost if the user logs out the chat-app, all the messages would be stored in the device, where chat-app is running.",
    //   techstack: ["React", "NodeJS", "Socket.io", "Bootstrap"],
    //   deploy: true,
    //   deployment: "https://freee-chatapp.netlify.app/",
    //   code: "https://github.com/shelcia/chat-app-frontend",
    // },

    {
      id: "weatherapp",
      name: "Weather App",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/weather_Jy_CBLz9H.webp?updatedAt=1701194091055",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/weather-app_eqaXO8qfP0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170736630",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/weather-app_UBPTt3MeyfH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170459499",
      description:
        "This weather app provides users with detailed information about the current weather conditions in various locations around the world. The app probably uses data from two different APIs: the OpenWeather API, which provides weather-related information such as temperature, precipitation, and wind speed; and the Rest Countries API, which provides general information about countries such as population, land area, and capital. By combining these two APIs, the app is able to give users a comprehensive view of the current weather conditions and general information of the specific location they are interested in. The weather app has a simple interface, easy to use, and can be accessed in many parts of the world. It can be useful for travelers, outdoor enthusiasts, or anyone else interested in keeping track of the weather.",
      // "Weather App uses Open Weather API and Rest Countries API to build an interface that allows the users to see current weather conditions in almost every part of the world and contains general details of all countries. ",
      techstack: ["React", "Bootstrap"],
      deploy: true,
      deployment: "https://weatherups.netlify.app/",
      code: "https://github.com/shelcia/Weather-app",
      forks: 19,
      stars: 12,
    },
    {
      id: "irul-theme",
      name: "Irul Theme",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/irul%20them_BytIqcI6Xn.webp?updatedAt=1701194091194",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/irul-theme_jpxcz8EG7v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170735788",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/irultheme_lCGSTTLPr.png?updatedAt=1627452469440",
      description:
        "IRUL is a dark theme for the Visual Studio Code (VS Code) code editor, it's name meaning 'Dark; in Tamil. The theme is based on the Halcyon color palette, which is known for its aesthetic and easy-on-the-eyes look. It's designed to be easy to look at during long coding sessions, making it a popular choice among developers. The IRUL theme is designed for being a dark minimal theme for Visual studio code, with two versions available for use in the VS Code marketplace. Currently over 1200 users use the theme.",
      // "IRUL means Dark in Tamil. Irul theme is a Dark Minimal Theme for VS Code Based on Halcyon colour pallette. It aims to be aesthetic and easy on the eyes for long coding sessions. As of now, three versions of the IRUL theme is available in VS Code marketplace. More than 1000 users use IRUL as their VS Code theme.",
      techstack: ["JSON", "VSCODE"],
      deploy: true,
      deployment:
        "https://marketplace.visualstudio.com/items?itemName=shelcia.irul-theme",
      code: "https://github.com/shelcia/irul-theme",
      forks: 19,
      stars: 12,
    },
    {
      id: "auv",
      name: "AUV-IIITDM",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/auv_fo-YcluJN.webp?updatedAt=1701194091672",
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
      forks: 19,
      stars: 12,
    },
    {
      id: "samgatha",
      name: "Samgatha",
      mockup:
        "https://ik.imagekit.io/shelcia/my_portfolio/mockup/samgatha_GdRi0Rz8z.webp?updatedAt=1701194091300",
      image:
        "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/samgatha_zfGoNnO-Sfq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170735314",
      imageURL:
        "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/samgatha_fGPvUsO2e.png?updatedAt=1627449846491",
      description:
        "I was part of the web development team (consisting of two members) who built the website for the college fest of IIITDM. We used Bootstrap for the frontend and NodeJS for the backend. The design focused on the theme DREAM. We used Nodejs to fetch event data from the database.",
      deploy: true,
      techstack: ["Bootstrap", "MongoDB", "NodeJS"],
      deployment: "https://samgatha-2020.glitch.me/",
      code: "https://github.com/shelcia/Samgatha-2020",
      forks: 19,
      stars: 12,
    },
    // {
    //   id: "slidingpuzzle",
    //   name: "Sliding Puzzle",
    //   image:
    //     "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/sliding-puzzle_KOQ1HfrAF8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170737619",
    //   imageURL:
    //     "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/sliding-puzzle_HshtnrLlbGa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170346800",
    //   description:
    //     "A sliding puzzle, sliding block puzzle, or sliding tile puzzle is a combination puzzle that challenges a player to slide (frequently flat) pieces along particular routes (usually on a board) to establish an end configuration. This fun game consists of three difficulty levels to test your brain.",
    //   techstack: ["Vanilla JS", "HTML", "CSS"],
    //   deploy: true,
    //   deployment: "https://sliding-puzzle-basic.netlify.app/",
    //   code: "https://github.com/shelcia/sliding-puzzle",
    // },
  ]);

  return (
    <ProjectsContext.Provider value={projects}>
      {props.children}
    </ProjectsContext.Provider>
  );
};
