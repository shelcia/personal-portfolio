// pages/index.js
import React from "react";
import Topbar from "@/components/common/Topbar";
import Header from "./components/Header";
import "../app/globals.css";
import ProjectCard from "./components/ProjectCard";
import { Project } from "@/types";
import { featuredProjects } from "@/context/FeaturedProjectsContext";
import { calSans } from "@/utils/fonts";

const Home = () => {
  return (
    <>
      <Topbar />
      <main suppressHydrationWarning={true}>
        <Header />
        <div className="w-full rounded-md bg-transparent antialiased bg-grid-black/[0.05] relative overflow-hidden">
          <div className="p-4 max-w-7xl mx-auto relative z-10">
            <h1
              className={`text-4xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-2 ${calSans.className}`}
            >
              Featured Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            {/* <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {featuredProjects &&
                featuredProjects.map((project: Project) => (
                  <ProjectCard
                    title={project.name}
                    image={project.image}
                    link={project.deployment}
                    key={project.id}
                  />
                ))}
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
