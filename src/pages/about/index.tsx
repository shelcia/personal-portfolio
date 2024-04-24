import React, { useRef } from "react";
import "../../app/globals.css";
import Topbar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { cn } from "@/utils/cn";
import { calsans, dmsans } from "@/utils/fonts";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ShimmerButton } from "@/components/common/CustomButtons";

const AboutPage = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToExperience = () => {
    if (experienceRef?.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef?.current) {
      skillsRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Topbar />
      <main className="px-4 sm:px-24 mb-8 md:pt-8 pt-4">
        <h1
          className={cn(
            "md:text-5xl text-3xl text-bold mb-0",
            calsans.className
          )}
        >
          Who is Shelcia?
        </h1>
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
              "md:text-xl text-base px-0 md:text-2xl font- text-slate-800 dark:text-gray-400 w-full leading-relaxed lg:leading-snug  mx-auto py-4",
              dmsans.className
            )}
          >
            I am a
            <Highlight className="text-black dark:text-white">
              confident and results-driven individual
            </Highlight>
            who thrives in problem-solving. With a strong focus on JavaScript,
            React and a passion for the MERN stack, I excel at tackling
            challenges head-on.
            <br />
            With over
            <Highlight className="text-black dark:text-white">
              three years of experience
            </Highlight>
            at companies like
            <Highlight className="text-black dark:text-white">
              NASDAQ, HIRA, NYX Wolves, Solera, and Guvi,
            </Highlight>
            I&apos;ve honed my problem-solving skills. I&apos;m committed to
            open-source contributions and hold a Bachelor&apos;s degree from
            IIIT Chennai. Currently, I&apos;m pursuing a Master&apos;s in
            Computer Information Sciences at UW Madison. I welcome collaboration
            and feedback to deliver excellent results.
            <br />
            <br />
            Let&apos;s connect and explore opportunities to collaborate or
            discuss how my skills can benefit your projects.
          </motion.h1>
        </HeroHighlight>
        <div className="flex gap-2 wrap">
          <ShimmerButton
            title="My Experience"
            onclick={() => scrollToExperience()}
          />
          <ShimmerButton title="My Skills" onclick={() => scrollToSkills()} />
        </div>
        <div className="my-12" ref={experienceRef}>
          <Experience />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
