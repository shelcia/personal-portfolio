// pages/index.js
import React from "react";
import Topbar from "@/components/common/Topbar";
import Header from "./components/Header";
import "../app/globals.css";
import ProjectCard from "./components/ProjectCard";
import { Project } from "@/types";
import { featuredProjects } from "@/context/FeaturedProjectsContext";
import { calSans } from "@/utils/fonts";
import { WavyBackground } from "@/components/ui/wavy-background";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Home = () => {
  return (
    <>
      <Topbar />
      <main suppressHydrationWarning={true}>
        <Header />
        {/* <div
          className="w-full rounded-md bg-zinc-50 antialiased 
        // bg-grid-black/[0.05] 
        relative overflow-hidden"
        > */}
        <div
          className="w-full rounded-md bg-zinc-50 antialiased 
        relative overflow-hidden"
        >
          <div className="p-4 max-w-7xl mx-auto relative z-10">
            <h1
              className={`text-4xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-2 ${calSans.className}`}
            >
              Featured Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {featuredProjects &&
                featuredProjects.map((project: Project) => (
                  <ProjectCard
                    title={project.name}
                    image={project.image}
                    link={project.deployment}
                    key={project.id}
                    desc={project.desc}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-zinc-50 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </main>
    </>
  );
};

export default Home;

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
