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
import Head from "next/head";

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
      <Head>
        <title>About | Shelcia David</title>
        <meta
          name="description"
          content="About Shelcia David | Experience | Skills"
        />
        <meta property="og:image" content="/social-graph-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.shelcia-dev.me/" />
        <meta property="og:type" content="website" />
      </Head>
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
            Welcome to my corner of the digital world!. With a strong foundation
            in JavaScript and React, coupled with my enthusiasm for the MERN
            stack, I thrive in dynamic environments where innovation meets
            practicality.
            <br />
            <br />
            Over the past
            <Highlight className="text-black dark:text-white">
              three years
            </Highlight>
            , I&apos;ve had the privilege of contributing my skills to esteemed
            companies like
            <Highlight className="text-black dark:text-white">
              NASDAQ, HIRA, NYX Wolves, Solera, and Guvi,
            </Highlight>
            . I am committed to the ethos of open-source collaboration and
            continuous learning, recognizing them as pillars of growth in our
            ever-evolving industry.
            <br />
            <br />
            Holding a
            <Highlight className="text-black dark:text-white">
              Bachelor&apos;s degree from IIIT Chennai
            </Highlight>
            and currently pursuing a
            <Highlight className="text-black dark:text-white">
              Master&apos;s in Information at University of Wisconsin-Madison
            </Highlight>
            , I am dedicated to expanding my knowledge and expertise.
            <br />
            <br />
            Whether you&apos;re looking to embark on a new project or seeking
            innovative solutions for existing ones, I&apos;m eager to connect
            and explore how my skills can contribute to your success. Let&apos;s
            start a conversation and discover how we can create something
            remarkable together.
            {/* I am a
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
            discuss how my skills can benefit your projects. */}
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
