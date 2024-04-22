import React from "react";
import Topbar from "@/components/common/Topbar";
import { designs } from "@/context/DesignContext";
import { DesignItem } from "@/types";
import { PinContainer } from "@/components/ui/3d-pin";
import "../../app/globals.css";
import { calsans, dmsans } from "@/utils/fonts";
import { projects } from "@/context/ProjectContext";
import Footer from "@/components/common/Footer";
import ProjectCard from "../components/ProjectCard";
import { cn } from "@/utils/cn";

const Works = () => {
  return (
    <>
      <Topbar />
      <main className="mt-0 mb-32 md:px-24 px-4 w-full relative bg-grid-black/[0.05]">
        <div className="relative z-10">
          <h1 className={`${calsans.className} mb-4 text-4xl md:text-6xl`}>
            Development
          </h1>
          {/* <div className={`mx-auto ${dmsans.className}`}> */}
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-4",
              dmsans.className
            )}
          >
            {projects.map((item) => (
              <ProjectCard
                title={item.name}
                image={item.mockup}
                link={item.deployment}
                key={item.id}
                desc={item.desc}
                name={item.id}
              />
            ))}

            {/* <HoverEffect items={projects} /> */}
          </div>
          <h1 className={`${calsans.className} mt-8 mb-8 text-4xl md:text-6xl`}>
            Design
          </h1>
          <div className="relative z-20">
            <div
              className={`grid grid-cols-1 lg:grid-cols-4 gap-2 ${dmsans.className}`}
            >
              {designs.items.map((design: DesignItem) => (
                <PinContainer
                  key={design.guid}
                  title={`View ${design.title} on Behance`}
                  href={design.link}
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-[20rem] bg-white">
                    <h3 className="max-w-xs !m-0 font-bold  text-base dark:text-slate-100 text-black">
                      {design.title}
                    </h3>
                    {/* <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{design.description}</span>
                </div> */}
                    <div
                      className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
                      style={{
                        backgroundImage: `url(${design.thumbnail})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                </PinContainer>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Works;
