import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Project {
  id: string;
  name: string;
  mockup?: string;
  image: string | StaticImageData;
  imageURL?: string;
  desc?: string;
  description?: string;
  techstack: string[];
  deploy: boolean;
  deployment?: string;
  code: string;
  forks: number;
  stars: number;
}

export interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  published?: string | null;
  content: string;
  categories: string[];
}

export interface Design {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: DesignItem[];
}

export interface DesignItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: object;
  categories: string[];
}

export interface ExperienceItem {
  name: string;
  designation: string;
  year: string;
  desc: string;
  skills: string[];
  date: string;
  timeline: string;
}

export interface SkillItem {
  name: string;
  img: ReactNode;
  bgClass: string;
  colorClass: string;
}
