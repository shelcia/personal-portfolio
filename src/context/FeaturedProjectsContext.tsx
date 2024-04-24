import { Project } from "@/types";
import MockerMockup from "@/assets/images/mocker/4.webp";
import BloggramMockup from "@/assets/images/bloggram/1.webp";
import DPMockup from "@/assets/images/dynamic-portfolio/2.webp";

export const featuredProjects: Project[] = [
  {
    id: "mocker",
    name: "Mocker",
    image: MockerMockup,
    desc: "Generate mockup data for testing and prototyping",
    techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
    deploy: true,
    forks: 19,
    stars: 12,
    deployment: "https://mocker-gen.netlify.app/",
    code: "https://github.com/shelcia/mocker",
  },
  // {
  //   id: "socialgram",
  //   name: "Socialgram",
  //   image: MockerMockup,
  //   desc: "Seamless Social Website",
  //   techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
  //   deploy: true,
  //   forks: 19,
  //   stars: 12,
  //   deployment: "https://mocker-gen.netlify.app/",
  //   code: "https://github.com/shelcia/mocker",
  // },
  {
    id: "bloggram",
    name: "Bloggram",
    image: BloggramMockup,
    desc: "Write, Read and Share Blogs",
    techstack: ["React", "NodeJS", "Material UI"],
    deploy: true,
    forks: 19,
    stars: 12,
    deployment: "https://mocker-gen.netlify.app/",
    code: "https://github.com/shelcia/mocker",
  },
  {
    id: "dynamic-portfolio",
    name: "Dynamic Portfolio",
    image: DPMockup,
    desc: "Build websites by filling up forms",
    techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
    deploy: true,
    forks: 19,
    stars: 12,
    deployment: "https://mocker-gen.netlify.app/",
    code: "https://github.com/shelcia/mocker",
  },
];
