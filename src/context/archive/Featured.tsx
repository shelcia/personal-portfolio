import { Project } from "@/types";
import MockerMockup from "@/assets/images/mocker/4.webp";
// import BloggramMockup from "@/assets/images/bloggram/1.webp";
// import DPMockup from "@/assets/images/dynamic-portfolio/2.webp";
import CCSMapMockup from "@/assets/images/ccs/2.webp";
import AiAuditMockup from "@/assets/images/ai-audit/1.webp";

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
  // {
  //   id: "bloggram",
  //   name: "Bloggram",
  //   image: BloggramMockup,
  //   desc: "Write, Read and Share Blogs",
  //   techstack: ["React", "NodeJS", "Material UI"],
  //   deploy: true,
  //   forks: 19,
  //   stars: 12,
  //   deployment: "https://bloggram-beta.vercel.app/",
  //   code: "https://github.com/shelcia/Blog-website",
  // },

  {
    id: "ccs-knowledge",
    name: "CCS Knowledge",
    image: CCSMapMockup,
    desc: "Report & Analytics Dashboard",
    techstack: ["R", "RShiny", "Bootstrap", "NodeJS"],
    deploy: true,
    forks: 0,
    stars: 0,
    deployment: "https://connect.doit.wisc.edu/knowledge-map/",
    code: "https://github.com/madcollab-jrg/ccs-knowledge-map",
  },
  {
    id: "ai-audit",
    name: "AI Audit",
    image: AiAuditMockup,
    desc: "Comprehensive Survey Tool",
    techstack: ["NextJs", "React", "NodeJS", "Typescript"],
    deploy: true,
    forks: 0,
    stars: 0,
    deployment: "https://ai-fairness.vercel.app/",
    code: "https://github.com/ai-fairness-research/ai-fairness-web-app",
  },
  // {
  //   id: "dynamic-portfolio",
  //   name: "Dynamic Portfolio",
  //   image: DPMockup,
  //   desc: "Build websites by filling up forms",
  //   techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
  //   deploy: true,
  //   forks: 19,
  //   stars: 12,
  //   deployment: "https://dynamic--portfolio.vercel.app/",
  //   code: "https://github.com/shelcia/dynamic-portflio",
  // },
];
