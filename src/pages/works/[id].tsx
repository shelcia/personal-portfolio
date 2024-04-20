import React, { useEffect, useState } from "react";
import Footer from "@/components/common/Footer";
import Topbar from "@/components/common/Topbar";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useRouter } from "next/router";
import { projects } from "@/context/ProjectContext";
import { Project } from "@/types";
import { calSans, dmsans } from "@/utils/fonts";
import { cn } from "@/utils/cn";
import { Vortex } from "@/components/ui/vortex";
import ProjectInfoCards from "../components/ProjectInfoCards";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import DotBackground from "@/components/ui/dot-bg";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";

const ProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  const [proj, setProj] = useState<Project>({
    id: "mocker",
    name: "Mocker",
    mockup:
      "https://ik.imagekit.io/shelcia/my_portfolio/mockup/mocker_FhIiA_GE6v.webp?updatedAt=1701194092672",
    image:
      "https://ik.imagekit.io/shelcia/my_portfolio/display-demo/mocker_c9ZHHjepY9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668874004199",
    imageURL:
      "https://ik.imagekit.io/shelcia/my_portfolio/demo_images/mocker_g1ypry6O-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668873869830",
    // description:
    //   "Mocker can generate mock data with API endpoints, powered by faker.js",
    description:
      "Mocker is a tool that allows you to generate fake, or 'mock', data that can be used for testing or prototyping purposes. It uses a library called Faker.js, which generates fake data such as names, addresses, and phone numbers in a variety of formats. By creating an API endpoint, the tool enables users to create a mocked data set and use it for testing of applications or as a substitute for data that is not yet available in a development stage, also enable a client to test their apps and other functions, in a more realistic scenario.",
    techstack: ["React", "NodeJS", "Material UI", "FakerJs"],
    deploy: true,
    // deployment: "https://mockapi-flax.vercel.app/",
    deployment: "https://mocker-gen.netlify.app/",
    code: "https://github.com/shelcia/mocker",
    forks: 19,
    stars: 12,
  });

  useEffect(() => {
    const req = projects.filter((itm) => itm.id === router.query.id);
    setProj(req[0]);
  }, [router.query.id]);

  const words = [
    {
      text: proj?.name ? proj.name : `Project`,
    },
  ];

  return (
    <>
      <Topbar />
      <main className={cn("mt-32 md:mt-24 px-24 relative", dmsans.className)}>
        {/* <DotBackground> */}
        <div
          className={`max-w-4xl mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ${dmsans.className} mt-4 z-30 `}
        >
          <TypewriterEffect
            words={words}
            className={`font-bold text-3xl text-neutral-800 dark:text-neutral-200 ${calSans.className}`}
          />
          <div
            className={cn(
              "max-w-4xl font-semibold mx-auto my-8",
              calSans.className
            )}
          >
            {proj?.description}
          </div>
          {proj && <ProjectInfoCards project={proj} />}
        </div>
        {/* </DotBackground> */}
        <BackgroundBeams />
        {/* <div className="max-w-4xl mx-auto rounded-md h-[20rem] overflow-hidden">
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className={cn(
                "text-black text-2xl md:text-6xl font-bold text-center",
                calSans.className
              )}
            >
              <Highlight className="text-black dark:text-white">
                {proj?.name}
              </Highlight>
            </motion.h1>
          </HeroHighlight>
        </div>
        <div
          className={cn(
            "max-w-4xl font-semibold mx-auto my-8",
            calSans.className
          )}
        >
          {proj?.description}
        </div>
        {proj && <ProjectInfoCards project={proj} />} */}
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
