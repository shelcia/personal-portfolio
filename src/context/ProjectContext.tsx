import { Project } from "@/types";
import Mocker1 from "../assets/images/mocker/1-1.webp";
import Mocker2 from "../assets/images/mocker/2.webp";
// import Mocker3 from "../assets/images/mocker/3.webp";
import Mocker4 from "../assets/images/mocker/4.webp";
import Mocker5 from "../assets/images/mocker/5.webp";

import CCS1 from "../assets/images/ccs/1.webp";
import CCS2 from "../assets/images/ccs/2.webp";
import CCS3 from "../assets/images/ccs/3.webp";
import CCS4 from "../assets/images/ccs/4.webp";

import DP1 from "../assets/images/dynamic-portfolio/2.webp";
import DP2 from "../assets/images/dynamic-portfolio/1.webp";
import DP3 from "../assets/images/dynamic-portfolio/3.webp";
import DP4 from "../assets/images/dynamic-portfolio/4.webp";

// import Socialgram1 from "../assets/images/socialgram/2-1.webp";
// import Socialgram2 from "../assets/images/socialgram/1.webp";
// import Socialgram3 from "../assets/images/socialgram/3.webp";

import Samgatha1 from "../assets/images/samgatha/1.webp";
import Samgatha2 from "../assets/images/samgatha/2.webp";
import Samgatha3 from "../assets/images/samgatha/3.webp";

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

import Tracking1 from "../assets/images/nimble-tracking/1.webp";
import Tracking2 from "../assets/images/nimble-tracking/2.webp";
import Tracking3 from "../assets/images/nimble-tracking/3.webp";
import Tracking4 from "../assets/images/nimble-tracking/4.webp";

import { ContentTitle } from "@/pages/components/ProjectImages";

export const projects: Project[] = [
  {
    id: "nimble-tracking",
    name: "Nimble Tracking",
    mockup: Tracking1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Tracking Landing Page" />,
        className: "w-full",
        thumbnail: Tracking1,
      },
      {
        id: 2,
        content: <ContentTitle title="Shipment Dashboard" />,
        className: "w-full",
        thumbnail: Tracking2,
      },
      {
        id: 3,
        content: <ContentTitle title="Order & Package Details" />,
        className: "w-full",
        thumbnail: Tracking3,
      },
      {
        id: 4,
        content: <ContentTitle title="Tracking Status & Timeline" />,
        className: "w-full",
        thumbnail: Tracking4,
      },
    ],
    desc: "End-to-end shipment tracking platform for merchants and customers",
    description:
      "I designed and developed Nimble Tracking, a scalable end-to-end shipment tracking platform used by merchants and customers to monitor orders in real time. I led the frontend development from Figma designs to a fully responsive, accessible production-ready web application. On the backend, I built microservices that listen to order and package creation and updates, aggregate data from internal Order Management and Transport Management systems, and persist tracking information securely in AWS S3. The system avoids storing personally identifiable information, reduces direct database access, and improves security and performance. I also implemented CI/CD pipelines and infrastructure using Terraform to deploy the service across multiple environments including dev, staging, performance, sandbox, and production.",
    techstack: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "AWS S3",
      "GraphQL",
      "Terraform",
    ],
    deploy: true,
    deployment: "https://nmblmsg.com/tracking",
    code: "", // private repository
    forks: 0,
    stars: 0,
  },
  {
    id: "mocker",
    name: "Mocker",
    mockup: Mocker1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Generated JSON data" />,
        className: "w-full",
        thumbnail: Mocker1,
      },
      {
        id: 2,
        content: <ContentTitle title="Generated Endpoints" />,
        className: "w-full",
        thumbnail: Mocker2,
      },
      {
        id: 3,
        content: <ContentTitle title="Documentation Page" />,
        className: "w-full",
        thumbnail: Mocker5,
      },
      {
        id: 4,
        content: (
          <ContentTitle title="Editing the scheme for generation of data" />
        ),
        className: "w-full",
        thumbnail: Mocker4,
      },
    ],
    desc: "Generate mockup data for testing and prototyping",
    description:
      "I developed Mocker as a powerful mock data generation tool to streamline the development and testing process. Using Faker.js, I built a system that provides developers with realistic, customizable test data through API endpoints. My implementation allows users to generate comprehensive datasets including names, addresses, phone numbers, and more in various formats. I designed the tool to be particularly valuable for developers who need to test applications with realistic data scenarios, prototype features before real data is available, or create consistent test environments. The API-first approach I implemented enables seamless integration into existing development workflows and testing pipelines.",
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
        className: "w-full",
        thumbnail: CCS1,
      },
      {
        id: 2,
        content: <ContentTitle title="Reporting Analytics Page" />,
        className: "w-full",
        thumbnail: CCS2,
      },
      {
        id: 3,
        content: <ContentTitle title="Information Page" />,
        className: "w-full",
        thumbnail: CCS3,
      },
      {
        id: 4,
        content: <ContentTitle title="Data Curated Page" />,
        className: "w-full",
        thumbnail: CCS4,
      },
    ],
    desc: "Report & Analytics Dashboard",
    description:
      "I developed this Knowledge Map dashboard under the guidance of Prof. Jackson to visualize and analyze environmental survey data. I created a platform serving two critical functions: visualizing community responses to environmental surveys and evaluating the representativeness of these responses across different demographics. Through my implementation, the tool empowers local communities to engage in environmental justice discussions and supports evidence-based environmental policymaking. I focused on making complex survey data accessible and understandable, effectively bridging the gap between community insights and policy decisions.",
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
    desc: "Comprehensive Survey Tool",
    mockup: AI1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Scenario's Page" />,
        className: "w-full",
        thumbnail: AI2,
      },
      {
        id: 2,
        content: <ContentTitle title="Audit Page" />,
        className: "w-full",
        thumbnail: AI3,
      },
      {
        id: 3,
        content: <ContentTitle title="Survey Page" />,
        className: "w-full",
        thumbnail: AI4,
      },
      {
        id: 4,
        content: <ContentTitle title="Thank you Page" />,
        className: "w-full",
        thumbnail: AI5,
      },
    ],
    description:
      "I developed AI Audit as a sophisticated survey and analysis platform to evaluate the societal impact of AI systems. I implemented carefully crafted scenarios where the platform collects user insights about how AI decision-making affects various demographic groups, with particular attention to potential risks for minority communities. I built a comprehensive admin dashboard that enables researchers to customize scenarios, manage survey questions, and analyze responses through interactive data visualizations. I included CSV export functionality for deeper analysis. Through this feedback loop I designed, the platform provides crucial insights to AI developers, helping them create more equitable and inclusive AI systems that better serve all communities.",
    techstack: ["NextJS", "React", "NodeJS", "Typescript", "MongoDB", "MUI"],
    deploy: true,
    forks: 0,
    stars: 0,
    deployment: "https://ai-fairness.vercel.app/",
    code: "https://github.com/ai-fairness-research/ai-fairness-web-app",
  },
  {
    id: "dynamic-portfolio",
    name: "Dynamic Portfolio Maker",
    mockup: DP1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Editing Portfolio Content" />,
        className: "w-full",
        thumbnail: DP1,
      },
      {
        id: 2,
        content: <ContentTitle title="Home Page" />,
        className: "w-full",
        thumbnail: DP2,
      },
      {
        id: 3,
        content: <ContentTitle title="Authentication Page" />,
        className: "w-full",
        thumbnail: DP3,
      },
      {
        id: 4,
        content: <ContentTitle title="Portfolio Template 1" />,
        className: "w-full",
        thumbnail: DP4,
      },
    ],
    desc: "Build websites by filling up forms",
    description:
      "I created Dynamic Portfolio as an innovative website building platform that transforms the traditional web development process into a simple form-filling experience. I designed it for professionals who need an online presence without coding knowledge, allowing users to create customized websites in under five minutes. I developed three distinct templates and built an intuitive interface for content management. Each template I created is optimized for professional presentation while maintaining flexibility for personal customization. Through this tool, I aimed to bridge the gap between sophisticated web development and accessible website creation.",
    techstack: ["React", "Bootstrap", "NodeJS", "MongoDB"],
    deploy: true,
    deployment: "https://dynamic--portfolio.vercel.app/",
    code: "https://github.com/shelcia/dynamic-portflio",
    forks: 75,
    stars: 33,
  },
  {
    id: "irul-theme",
    name: "Irul Theme",
    mockup: IT1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Neelam Variant" />,
        className: "w-full",
        thumbnail: IT1,
      },
      {
        id: 2,
        content: <ContentTitle title="Default variant" />,
        className: "w-full",
        thumbnail: IT2,
      },
      {
        id: 3,
        content: <ContentTitle title="Default variant" />,
        className: "w-full",
        thumbnail: IT3,
      },
    ],
    desc: "Dark, minimalist theme for VS Code",
    description:
      "I created IRUL (meaning 'Dark' in Tamil) as a carefully crafted Visual Studio Code theme designed for extended coding sessions. I based it on the sophisticated Halcyon color palette, ensuring optimal contrast and color selection to reduce eye strain while maintaining code readability. I developed two variants to suit different preferences, and the theme has garnered a community of over 1,200 active users. In my design, I focused on a minimalist approach that emphasizes essential syntax highlighting while eliminating visual distractions, making it ideal for developers who spend long hours coding.",
    techstack: ["JSON", "VSCODE"],
    deploy: true,
    deployment:
      "https://marketplace.visualstudio.com/items?itemName=shelcia.irul-theme",
    code: "https://github.com/shelcia/irul-theme",
    forks: 2565,
    stars: 2565,
  },
  {
    id: "samgatha",
    name: "Samgatha",
    mockup: Samgatha1,
    images: [
      {
        id: 1,
        content: <ContentTitle title="Landing Page" />,
        className: "w-full",
        thumbnail: Samgatha1,
      },
      {
        id: 2,
        content: <ContentTitle title="Event's Page" />,
        className: "w-full",
        thumbnail: Samgatha2,
      },
      {
        id: 3,
        content: <ContentTitle title="Team's Page" />,
        className: "w-full",
        thumbnail: Samgatha3,
      },
    ],
    desc: "IIITDM College Fest Website 2019-20",
    description:
      "I worked as part of a two-member web development team to create the official website for IIITDM's college festival, Samgatha 2020. I helped design the website around the theme 'DREAM', incorporating modern design principles with practical functionality. Using Bootstrap for responsive design and NodeJS for backend operations, I implemented efficient event information management through MongoDB integration. The website I helped develop served as the primary information hub for festival activities, event registrations, and updates.",
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
        className: "w-full",
        thumbnail: Tradluxe1,
      },
      {
        id: 2,
        content: <ContentTitle title="Product's Page" />,
        className: "w-full",
        thumbnail: Tradluxe2,
      },
      {
        id: 3,
        content: <ContentTitle title="Brand's Page" />,
        className: "w-full",
        thumbnail: Tradluxe3,
      },
      {
        id: 4,
        content: <ContentTitle title="About Page" />,
        className: "w-full",
        thumbnail: Tradluxe4,
      },
    ],
    desc: "Tradluxe E-commerce website based in Singapore",
    description:
      "As the sole developer, I built this custom e-commerce platform for a Singapore-based luxury goods company, Tradluxe. I created a comprehensive digital solution that showcases their premium product line while maintaining brand integrity. I implemented dynamic product catalogs, an integrated blog system, and developed custom API endpoints for form submissions using Nodemailer. I crafted the design using Adobe XD, emphasizing luxury brand aesthetics while ensuring optimal user experience and conversion optimization.",
    techstack: ["React", "NodeJS", "Nodemailer", "Adobe XD", "Bootstrap"],
    deploy: true,
    deployment: "https://www.tradluxe.com/",
    code: "",
    forks: 0,
    stars: 0,
  },
];
