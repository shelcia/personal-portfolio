import { Project } from "@/types";
import Mocker1 from "../assets/images/mocker/1-1.webp";
import Mocker2 from "../assets/images/mocker/2.webp";
import Mocker3 from "../assets/images/mocker/3.webp";
import Mocker4 from "../assets/images/mocker/4.webp";
import Mocker5 from "../assets/images/mocker/5.webp";

import CCS1 from "../assets/images/ccs/1.webp";
import CCS2 from "../assets/images/ccs/2.webp";
import CCS3 from "../assets/images/ccs/3.webp";
import CCS4 from "../assets/images/ccs/4.webp";

import Bloggram1 from "../assets/images/bloggram/1.webp";
import Bloggram2 from "../assets/images/bloggram/2.webp";
import Bloggram3 from "../assets/images/bloggram/3.webp";
import Bloggram4 from "../assets/images/bloggram/4.webp";

import DP1 from "../assets/images/dynamic-portfolio/2.webp";
import DP2 from "../assets/images/dynamic-portfolio/1.webp";
import DP3 from "../assets/images/dynamic-portfolio/3.webp";
import DP4 from "../assets/images/dynamic-portfolio/4.webp";

import Socialgram1 from "../assets/images/socialgram/2-1.webp";
import Socialgram2 from "../assets/images/socialgram/1.webp";
import Socialgram3 from "../assets/images/socialgram/3.webp";

import NC1 from "../assets/images/noobcodes/1.webp";
import NC2 from "../assets/images/noobcodes/2.webp";
import NC3 from "../assets/images/noobcodes/3.webp";

import Samgatha1 from "../assets/images/samgatha/1.webp";
import Samgatha2 from "../assets/images/samgatha/2.webp";
import Samgatha3 from "../assets/images/samgatha/3.webp";

// import AUV from "../assets/images/auv/1.webp";
import Tradluxe1 from "../assets/images/tradluxe/1.webp";
import Tradluxe2 from "../assets/images/tradluxe/2.webp";
import Tradluxe3 from "../assets/images/tradluxe/3.webp";
import Tradluxe4 from "../assets/images/tradluxe/4.webp";

import IT1 from "../assets/images/irul-theme/1.webp";
import IT2 from "../assets/images/irul-theme/2.webp";
import IT3 from "../assets/images/irul-theme/3.webp";

import AI1 from "../assets/images/ai-audit/1.webp";
import AI2 from "../assets/images/ai-audit/2.webp";
import AI3 from "../assets/images/ai-audit/3.webp";
import AI4 from "../assets/images/ai-audit/4.webp";
import AI5 from "../assets/images/ai-audit/5.webp";

import { ContentTitle } from "@/pages/components/ProjectImages";

export const projects: Project[] = [
  {
    id: "mocker",
    name: "Mocker",
    mockup: Mocker1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Generated JSON data" />,
        className: "col-span-6",
        thumbnail: Mocker1,
      },
      {
        id: 2,
        content: <ContentTitle title="Generated Endpoints" />,
        className: "col-span-6",
        thumbnail: Mocker2,
      },
      {
        id: 3,
        // content: <ContentTitle title="Authentication Page" />,
        content: <ContentTitle title="Documentation Page" />,
        className: "col-span-6",
        thumbnail: Mocker5,
      },
      {
        id: 4,
        content: (
          <ContentTitle title="Editing the scheme for generation of data" />
        ),
        className: "col-span-6",
        thumbnail: Mocker4,
      },
    ],
    desc: "Generate mockup data for testing and prototyping",
    image:
      "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/mocker_c9ZHHjepY9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668874004199",
    imageURL:
      "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/mocker_g1ypry6O-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668873869830",
    description:
      "Mocker is a tool that allows you to generate fake, or 'mock', data that can be used for testing or prototyping purposes. It uses a library called Faker.js, which generates fake data such as names, addresses, and phone numbers in a variety of formats. By creating an API endpoint, the tool enables users to create a mocked data set and use it for testing of applications or as a substitute for data that is not yet available in a development stage, also enable a client to test their apps and other functions, in a more realistic scenario.",
    techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
    deploy: true,
    deployment: "https://mocker-gen.netlify.app/",
    code: "https://github.com/shelcia/mocker",
    forks: 29,
    stars: 17,
  },

  {
    id: "ccs-knowledge",
    name: "CCS Knowledge",
    mockup: CCS2,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Landing Page" />,
        className: "col-span-6",
        thumbnail: CCS1,
      },
      {
        id: 2,
        content: <ContentTitle title="Reporting Analytics Page" />,
        className: "col-span-6",
        thumbnail: CCS2,
      },
      {
        id: 3,
        content: <ContentTitle title="Information Page" />,
        className: "col-span-6",
        thumbnail: CCS3,
      },
      {
        id: 4,
        content: <ContentTitle title="Data Curated Page" />,
        className: "col-span-6",
        thumbnail: CCS4,
      },
    ],
    desc: "Report & Analytics Dashboard",
    image:
      "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/bloggram_MNEIxWCSV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649611643446",
    imageURL:
      "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/bloggram_sI3LlPN0t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649611517394",
    description:
      "I have created this Knowledge Map dashboard with the guidance of Prof. Jackson which has two goals - visualize community responses to environmental surveys and display the representativeness of responses. This understanding will help inform local environmental policymaking and communication, and empower local communities with the capacity to discuss environmental justice solutions.",
    techstack: ["R", "RShiny", "Bootstrap", "NodeJS"],
    deploy: true,
    deployment: "https://connect.doit.wisc.edu/knowledge-map/",
    code: "https://github.com/madcollab-jrg/ccs-knowledge-map",
    forks: 0,
    stars: 0,
  },

  {
    id: "ai-audit",
    name: "AI Audit",
    image: AI1,
    mockup: AI1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Landing Page" />,
        className: "col-span-6",
        thumbnail: AI2,
      },
      {
        id: 2,
        content: <ContentTitle title="Product's Page" />,
        className: "col-span-6",
        thumbnail: AI3,
      },
      {
        id: 3,
        content: <ContentTitle title="Brand's Page" />,
        className: "col-span-6",
        thumbnail: AI4,
      },
      {
        id: 4,
        content: <ContentTitle title="About Page" />,
        className: "col-span-6",
        thumbnail: AI5,
      },
    ],
    description: "Comprehensive Survey Tool",
    techstack: ["NextJs", "React", "NodeJS", "Typescript"],
    deploy: true,
    forks: 0,
    stars: 0,
    deployment: "https://ai-fairness.vercel.app/",
    code: "https://github.com/ai-fairness-research/ai-fairness-web-app",
  },

  // {
  //   id: "bloggram",
  //   name: "Bloggram",
  //   mockup: Bloggram1,
  //   images: [
  //     {
  //       id: 1,
  //       content: <ContentTitle title="Home Page" />,
  //       className: "col-span-6",
  //       thumbnail: Bloggram1,
  //     },
  //     {
  //       id: 2,
  //       content: <ContentTitle title="Article Page in Dark Mode" />,
  //       className: "col-span-6",
  //       thumbnail: Bloggram2,
  //     },
  //     {
  //       id: 3,
  //       content: <ContentTitle title="Author's Page" />,
  //       className: "col-span-6",
  //       thumbnail: Bloggram3,
  //     },
  //     {
  //       id: 4,
  //       content: <ContentTitle title="User's Dashboard" />,
  //       className: "col-span-6",
  //       thumbnail: Bloggram4,
  //     },
  //   ],
  //   desc: "Write, Read and Share Blogs",
  //   image:
  //     "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/bloggram_MNEIxWCSV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649611643446",
  //   imageURL:
  //     "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/bloggram_sI3LlPN0t.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649611517394",
  //   description:
  //     "I have created a dynamic and interactive blog website as a hobby project. The feature of allowing users to edit, add, and react to blogs is a great way to make the platform more engaging and encourage user participation. Additionally, having separate comment sections or discussions for users across all blogs will also help foster a community and make it easier for users to engage with each other's ideas. The choice of a minimalistic UI will give the website clean and uncluttered appearance and also focuses on user experience. This type of blog website will be a great way for users to share their thoughts and ideas, as well as learn from others, it will be a great addition to the collection of personal projects.",
  //   techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
  //   deploy: true,
  //   deployment: "https://bloggram-beta.vercel.app/",
  //   code: "https://github.com/shelcia/Blog-website",
  //   forks: 9,
  //   stars: 9,
  // },
  {
    id: "dynamic-portfolio",
    name: "Dynamic Portfolio Maker",
    mockup: DP1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Editing Portfolio Content" />,
        className: "col-span-6",
        thumbnail: DP1,
      },
      {
        id: 2,
        content: <ContentTitle title="Home Page" />,
        className: "col-span-6",
        thumbnail: DP2,
      },
      {
        id: 3,
        content: <ContentTitle title="Authentication Page" />,
        className: "col-span-6",
        thumbnail: DP3,
      },
      {
        id: 4,
        content: <ContentTitle title="Portfolio Template 1" />,
        className: "col-span-6",
        thumbnail: DP4,
      },
    ],
    desc: "Build websites by filling up forms",
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
    forks: 75,
    stars: 33,
  },

  // {
  //   id: "noobcodes",
  //   name: "Noob Codes",
  //   mockup: NC1,
  //   images: [
  //     {
  //       id: 1,
  //       content: <ContentTitle title="Coding Problem's Page" />,
  //       className: "col-span-6",
  //       thumbnail: NC1,
  //     },
  //     {
  //       id: 2,
  //       content: <ContentTitle title="Search Implemented with Algolia" />,
  //       className: "col-span-6",
  //       thumbnail: NC2,
  //     },
  //     {
  //       id: 3,
  //       content: <ContentTitle title="Home Page" />,
  //       className: "col-span-6",
  //       thumbnail: NC3,
  //     },
  //   ],
  //   desc: "Simplify Python DS&A learning",
  //   image:
  //     "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/noobcodes_9V2BhFCKA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648374969800",
  //   imageURL:
  //     "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/noobcodes_xhCF7dQX1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648373850224",
  //   description:
  //     "NoobCodes aims to simplify the study of data structures and algorithms in the Python programming language, particularly with the aim of preparing for technical interviews. It likely provides tutorials, examples, and practice problems to help users understand and implement common data structures and algorithms in a clear and straightforward way. The goal is to make it easier for people who are new to computer science or are preparing for an interview to learn these concepts and become more confident in their coding abilities.",
  //   techstack: ["React", "Docusauras", "Mdx"],
  //   deploy: true,
  //   deployment: "https://noobcodes-docs.netlify.app/",
  //   code: "https://github.com/shelcia/noobcodes-docs",
  //   forks: 26,
  //   stars: 6,
  // },
  {
    id: "socialgram",
    name: "Social Gram",
    mockup: Socialgram1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Share Posts" />,
        className: "col-span-6",
        thumbnail: Socialgram1,
      },
      {
        id: 2,
        content: <ContentTitle title="User's Feed" />,
        className: "col-span-6",
        thumbnail: Socialgram2,
      },
      {
        id: 3,
        content: <ContentTitle title="Home Page/Authentication Page" />,
        className: "col-span-6",
        thumbnail: Socialgram3,
      },
    ],
    desc: "Share, engage with posts.",
    image:
      "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/socialgram_QZZgEkKTJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668874113040",
    imageURL:
      "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/socialgram1_DKSivHFxu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668873869834",
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
    forks: 44,
    stars: 37,
  },
  {
    id: "irul-theme",
    name: "Irul Theme",
    mockup: IT1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Neelam Variant" />,
        className: "col-span-6",
        thumbnail: IT1,
      },
      {
        id: 2,
        content: <ContentTitle title="Default variant" />,
        className: "col-span-6",
        thumbnail: IT2,
      },
      {
        id: 3,
        content: <ContentTitle title="Default variant" />,
        className: "col-span-6",
        thumbnail: IT3,
      },
    ],
    desc: "Dark, minimalist theme for VS Code",
    image:
      "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/irul-theme_jpxcz8EG7v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170735788",
    imageURL:
      "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/irultheme_lCGSTTLPr.png?updatedAt=1627452469440",
    description:
      "IRUL is a dark theme for the Visual Studio Code (VS Code) code editor, it's name meaning 'Dark; in Tamil. The theme is based on the Halcyon color palette, which is known for its aesthetic and easy-on-the-eyes look. It's designed to be easy to look at during long coding sessions, making it a popular choice among developers. The IRUL theme is designed for being a dark minimal theme for Visual studio code, with two versions available for use in the VS Code marketplace. Currently over 1200 users use the theme.",
    techstack: ["JSON", "VSCODE"],
    deploy: true,
    deployment:
      "https://marketplace.visualstudio.com/items?itemName=shelcia.irul-theme",
    code: "https://github.com/shelcia/irul-theme",
    forks: 2287,
    stars: 2287,
  },
  {
    id: "samgatha",
    name: "Samgatha",
    mockup: Samgatha1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Landing Page" />,
        className: "col-span-6",
        thumbnail: Samgatha1,
      },
      {
        id: 2,
        content: <ContentTitle title="Event's Page" />,
        className: "col-span-6",
        thumbnail: Samgatha2,
      },
      {
        id: 3,
        content: <ContentTitle title="Team's Page" />,
        className: "col-span-6",
        thumbnail: Samgatha3,
      },
    ],
    desc: "IIITDM College Fest Website 2019-20",
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
    forks: 0,
    stars: 0,
  },
  {
    id: "tradluxe",
    name: "Tradluxe",
    mockup: Tradluxe1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Landing Page" />,
        className: "col-span-6",
        thumbnail: Tradluxe1,
      },
      {
        id: 2,
        content: <ContentTitle title="Product's Page" />,
        className: "col-span-6",
        thumbnail: Tradluxe2,
      },
      {
        id: 3,
        content: <ContentTitle title="Brand's Page" />,
        className: "col-span-6",
        thumbnail: Tradluxe3,
      },
      {
        id: 4,
        content: <ContentTitle title="About Page" />,
        className: "col-span-6",
        thumbnail: Tradluxe4,
      },
    ],
    desc: "Tradluxe E-commerce website based in Singapore",
    image:
      "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/auv_FR1HUEv80j.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644170738839",
    imageURL:
      "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/auv_eLHyBxXD_.png?updatedAt=1627449817894",
    description:
      "I got commissioned to build a website for Singapor based E Commerce Company called Tradluxe. I was the sole developer until completion. I had to showcase their products, blogs and lure more customer. Furthermore, I have created an API to send form responses through the mail.",
    techstack: ["React", "NodeJS", "Nodemailer", "Adobe XD", "Bootstrap"],
    deploy: true,
    deployment: "https://www.tradluxe.com/",
    code: "",
    forks: 0,
    stars: 0,
  },
];
