import { SkillGroup, SkillItem } from "@/types";
import ReactIcon from "@/assets/skills-icons/ReactIcon";
import JSIcon from "@/assets/skills-icons/JSIcon";
import ReactNativeIcon from "@/assets/skills-icons/ReactNativeIcon";
import TSIcon from "@/assets/skills-icons/TSIcon";
import NodeIcon from "@/assets/skills-icons/NodeIcon";
import NextIcon from "@/assets/skills-icons/NextIcon";
import GoIcon from "@/assets/skills-icons/GoIcon";
import FigmaIcon from "@/assets/skills-icons/FigmaIcon";
import ExpressIcon from "@/assets/skills-icons/ExpressIcon";
import MUIIcon from "@/assets/skills-icons/MUIIcon";
import BootstrapIcon from "@/assets/skills-icons/BootstrapIcon";
import MongoDBIcon from "@/assets/skills-icons/MongoDBIcon";
import TailwindIcon from "@/assets/skills-icons/TailwindIcon";
import DockerIcon from "@/assets/skills-icons/DockerIcon";
import SQLIcon from "@/assets/skills-icons/SQLIcon";
import ViteIcon from "@/assets/skills-icons/ViteIcon";
import ReduxIcon from "@/assets/skills-icons/ReduxIcon";
import AWSIcon from "@/assets/skills-icons/AWSIcon";
import HTMLIcon from "@/assets/skills-icons/HTMLIcon";
import GraphQLIcon from "@/assets/skills-icons/GraphQLIcon";
import SocketIOIcon from "@/assets/skills-icons/SocketIOIcon";
import JestIcon from "@/assets/skills-icons/JestIcon";
import PlaywrightIcon from "@/assets/skills-icons/PlaywrightIcon";
import PactIcon from "@/assets/skills-icons/PactIcon";
import TestingLibraryIcon from "@/assets/skills-icons/TestingLibraryIcon";
import AzureIcon from "@/assets/skills-icons/AzureIcon";
import GCPIcon from "@/assets/skills-icons/GCPIcon";
import KubernetesIcon from "@/assets/skills-icons/KubernetesIcon";
import NetlifyIcon from "@/assets/skills-icons/NetlifyIcon";
import VercelIcon from "@/assets/skills-icons/VercelIcon";
import GoogleAnalyticsIcon from "@/assets/skills-icons/GoogleAnalyticsIcon";
import RybbitIcon from "@/assets/skills-icons/RybbitIcon";
import {
  AccessibilityIcon,
  CheckCircledIcon,
  ComponentInstanceIcon,
  GlobeIcon,
  MagnifyingGlassIcon,
  MixIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";

// General skills (no brand logo) share a neutral badge style.
const plain = (name: string, img: React.ReactNode): SkillItem => ({
  name,
  img,
  bgClass: "rgb(244 244 245)",
  colorClass: "rgb(63 63 70)",
});

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        img: <ReactIcon />,
        bgClass: "rgb(207 250 254)",
        colorClass: "rgb(14 116 144)",
      },
      {
        name: "TypeScript",
        img: <TSIcon />,
        bgClass: "rgb(186 230 253)",
        colorClass: "rgb(2 132 199)",
      },
      {
        name: "JavaScript",
        img: <JSIcon />,
        bgClass: "rgb(254 249 195)",
        colorClass: "rgb(202 138 4)",
      },
      {
        name: "Next.js",
        img: <NextIcon />,
        bgClass: "rgb(229 231 235)",
        colorClass: "rgb(31 41 55)",
      },
      {
        name: "Redux.js",
        img: <ReduxIcon />,
        bgClass: "rgb(243 232 255)",
        colorClass: "#764abc",
      },
      {
        name: "HTML/CSS",
        img: <HTMLIcon />,
        bgClass: "rgb(255 237 213)",
        colorClass: "rgb(194 65 12)",
      },
      {
        name: "Tailwind",
        img: <TailwindIcon />,
        bgClass: "rgb(207 250 254)",
        colorClass: "rgb(14 116 144)",
      },
      {
        name: "Bootstrap",
        img: <BootstrapIcon />,
        bgClass: "rgb(243 232 255)",
        colorClass: "rgb(126 34 206)",
      },
      {
        name: "MUI",
        img: <MUIIcon />,
        bgClass: "rgb(224 242 254)",
        colorClass: "rgb(2 132 199)",
      },
      {
        name: "Vite",
        img: <ViteIcon />,
        bgClass: "rgb(221 214 254)",
        colorClass: "rgb(109 40 217)",
      },
      {
        name: "React Native",
        img: <ReactNativeIcon />,
        bgClass: "rgb(207 250 254)",
        colorClass: "rgb(14 116 144)",
      },
      plain("Design Systems", <ComponentInstanceIcon />),
      plain("UI/UX Design", <MixIcon />),
      {
        name: "Figma",
        img: <FigmaIcon />,
        bgClass: "rgb(255 228 230)",
        colorClass: "rgb(225 29 72)",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        img: <NodeIcon />,
        bgClass: "rgb(217 249 157)",
        colorClass: "rgb(77 124 15)",
      },
      {
        name: "Express.js",
        img: <ExpressIcon />,
        bgClass: "rgb(229 231 235)",
        colorClass: "rgb(31 41 55)",
      },
      {
        name: "Go",
        img: <GoIcon />,
        bgClass: "rgb(224 242 254)",
        colorClass: "rgb(2 132 199)",
      },
      {
        name: "GraphQL",
        img: <GraphQLIcon />,
        bgClass: "rgb(252 231 243)",
        colorClass: "rgb(190 24 93)",
      },
      plain("REST APIs", <GlobeIcon />),
      {
        name: "MongoDB",
        img: <MongoDBIcon />,
        bgClass: "rgb(220 252 231)",
        colorClass: "rgb(21 128 61)",
      },
      {
        name: "SQL",
        img: <SQLIcon />,
        bgClass: "rgb(224 242 254)",
        colorClass: "rgb(2 132 199)",
      },
      {
        name: "Socket.io",
        img: <SocketIOIcon />,
        bgClass: "rgb(229 231 235)",
        colorClass: "rgb(31 41 55)",
      },
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      {
        name: "Jest",
        img: <JestIcon />,
        bgClass: "rgb(254 226 226)",
        colorClass: "rgb(153 27 27)",
      },
      {
        name: "Playwright",
        img: <PlaywrightIcon />,
        bgClass: "rgb(220 252 231)",
        colorClass: "rgb(21 128 61)",
      },
      {
        name: "Pact.io (contract testing)",
        img: <PactIcon />,
        bgClass: "rgb(229 231 235)",
        colorClass: "rgb(31 41 55)",
      },
      {
        name: "React Testing Library",
        img: <TestingLibraryIcon />,
        bgClass: "rgb(254 226 226)",
        colorClass: "rgb(185 28 28)",
      },
      plain("E2E / integration / snapshot testing", <CheckCircledIcon />),
      plain("WCAG 2.1 AA accessibility", <AccessibilityIcon />),
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      {
        name: "AWS",
        img: <AWSIcon />,
        bgClass: "rgb(255, 242, 222)",
        colorClass: "#f90",
      },
      {
        name: "Microsoft Azure",
        img: <AzureIcon />,
        bgClass: "rgb(219 234 254)",
        colorClass: "rgb(29 78 216)",
      },
      {
        name: "Google Cloud Platform",
        img: <GCPIcon />,
        bgClass: "rgb(219 234 254)",
        colorClass: "rgb(29 78 216)",
      },
      {
        name: "Docker",
        img: <DockerIcon />,
        bgClass: "rgb(219 234 254)",
        colorClass: "rgb(29 78 216)",
      },
      {
        name: "Kubernetes",
        img: <KubernetesIcon />,
        bgClass: "rgb(219 234 254)",
        colorClass: "rgb(29 78 216)",
      },
      plain("CI/CD", <UpdateIcon />),
      {
        name: "Netlify",
        img: <NetlifyIcon />,
        bgClass: "rgb(204 251 241)",
        colorClass: "rgb(15 118 110)",
      },
      {
        name: "Vercel",
        img: <VercelIcon />,
        bgClass: "rgb(229 231 235)",
        colorClass: "rgb(31 41 55)",
      },
      {
        name: "Google Analytics",
        img: <GoogleAnalyticsIcon />,
        bgClass: "rgb(255 237 213)",
        colorClass: "rgb(194 65 12)",
      },
      {
        name: "Rybbit",
        img: <RybbitIcon />,
        bgClass: "rgb(220 252 231)",
        colorClass: "rgb(21 128 61)",
      },
      plain("SEO", <MagnifyingGlassIcon />),
    ],
  },
];
