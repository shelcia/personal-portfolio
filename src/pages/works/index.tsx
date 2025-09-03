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
import { ShimmerButton } from "@/components/common/CustomButtons";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import GridBackground from "@/components/ui/grid-bg";

const Works = () => {
  return (
    <>
      <Head>
        <title>Shelcia David | Works</title>
        <meta
          name="description"
          content="All my development and design works"
        />
        <meta property="og:image" content="/social-graph-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.shelcia-dev.me/" />
        <meta property="og:type" content="website" />
      </Head>
      <Topbar />
      <GridBackground>
        <main className="mt-0 pb-32 md:px-24 px-4 w-full relative bg-grid-black/[0.05]">
          <div className="relative z-10">
            <h1 className={`${calsans.className} mb-4 text-4xl md:text-6xl`}>
              Development
            </h1>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <div
                className={cn(
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-4",
                  dmsans.className
                )}
              >
                {projects && projects.map((item) => (
                  <ProjectCard
                    title={item.name}
                    image={item.mockup}
                    link={item.deployment}
                    key={item.id}
                    desc={item.desc}
                    name={item.id}
                  />
                ))}
              </div>
            </motion.div>
            <div className="w-full flex justify-end">
              <Link
                href="https://github.com/shelcia?tab=repositories"
                target="_blank"
              >
                <ShimmerButton title="View More on Github" />
              </Link>
            </div>
            <h1
              className={`${calsans.className} mt-8 mb-8 text-4xl md:text-6xl`}
            >
              Design
            </h1>
            <div className="relative z-20">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ${dmsans.className}`}
              >
                {designs.items.map((design: DesignItem) => (
                  <PinContainer
                    key={design.guid}
                    title={`View ${design.title} on Behance`}
                    href={design.link}
                  >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-[20rem] bg-white">
                      <h3 className="!m-0 font-bold text-xl text-black">
                        {design.title}
                      </h3>
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
              <div className="w-full flex justify-end mt-8">
                <Link
                  href="https://github.com/shelcia?tab=repositories"
                  target="_blank"
                >
                  <ShimmerButton title="View More on Behance" />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </GridBackground>

      <Footer />
    </>
  );
};

export default Works;
