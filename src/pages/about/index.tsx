import React from "react";
import "../../app/globals.css";
import Topbar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { cn } from "@/utils/cn";
import { calSans, dmsans } from "@/utils/fonts";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ShimmerButton } from "@/components/common/CustomButtons";

const AboutPage = () => {
  return (
    <>
      <Topbar />
      <main className="mt-24 px-4 sm:px-24 mb-8">
        <h1 className={cn("text-5xl text-bold mb-0", calSans.className)}>
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
              "text-xl px-0 md:text-2xl font- text-slate-800 dark:text-gray-400 w-full leading-relaxed lg:leading-snug  mx-auto py-4",
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
          <ShimmerButton title="My Experience" />
          <ShimmerButton title="My Skills" />
        </div>
        <div className="my-12">
          <Experience />
        </div>
        <div>
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
