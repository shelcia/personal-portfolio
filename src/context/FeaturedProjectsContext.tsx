import { Project } from "@/types";
import MockerMockup from "@/assets/images/mocker/4.webp";
import TrackingMockup from "@/assets/images/nimble-tracking/1.webp";
// import CCSMapMockup from "@/assets/images/ccs/2.webp";
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
  {
    id: "nimble-tracking",
    name: "Nimble Tracking",
    image: TrackingMockup,
    desc: "End-to-end shipment tracking platform",
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
    forks: 0,
    stars: 0,
    deployment: "https://nmblmsg.com/tracking",
    code: "", // private repository
  },
  // {
  //   id: "ccs-knowledge",
  //   name: "CCS Knowledge",
  //   image: CCSMapMockup,
  //   desc: "Report & Analytics Dashboard",
  //   techstack: ["R", "RShiny", "Bootstrap", "NodeJS"],
  //   deploy: true,
  //   forks: 0,
  //   stars: 0,
  //   deployment: "https://connect.doit.wisc.edu/knowledge-map/",
  //   code: "https://github.com/madcollab-jrg/ccs-knowledge-map",
  // },
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
];
