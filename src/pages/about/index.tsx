import React from "react";
import "../../app/globals.css";
import Topbar from "@/components/common/Topbar";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Footer from "@/components/common/Footer";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/utils/cn";
import { dmsans } from "@/utils/fonts";

const AboutPage = () => {
  const words1 =
    "I am a confident and results-driven individual who thrives in problem-solving. With a strong focus on JavaScript, React and a passion for the MERN stack, I excel at tackling challenges head-on";
  const words2 =
    "With over three years of experience at companies like NASDAQ, HIRA, NYX Wolves, Solera, and Guvi, I've honed my problem-solving skills. I'm committed to open-source contributions and hold a Bachelor's degree from IIIT Chennai. Currently, I'm pursuing a Master's in Information at UW Madison. I welcome collaboration and feedback to deliver excellent results";
  const words3 =
    "Let's connect and explore opportunities to collaborate or discuss how my skills can benefit your projects.";

  return (
    <>
      <Topbar />
      <main className="mt-24 px-4 sm:px-24 mb-8">
        <div className="h-[20rem] w-full rounded-md dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-8">
          <div className="w-full mx-auto p-4">
            <p
              className={cn(
                "w-full mx-auto my-2 relative z-10 text-base font-medium text-slate-800 dark:text-gray-400",
                dmsans.className
              )}
            >
              I am a confident and results-driven individual who thrives in
              problem-solving. With a strong focus on JavaScript, React and a
              passion for the MERN stack, I excel at tackling challenges
              head-on.
              <br />
              With over three years of experience at companies like NASDAQ,
              HIRA, NYX Wolves, Solera, and Guvi, I&apos;ve honed my
              problem-solving skills. I&apos;m committed to open-source
              contributions and hold a Bachelor&apos;s degree from IIIT Chennai.
              Currently, I&apos;m pursuing a Master&apos;s in Information at UW
              Madison. I welcome collaboration and feedback to deliver excellent
              results.
              <br />
              Let&apos;s connect and explore opportunities to collaborate or
              discuss how my skills can benefit your projects.
            </p>
          </div>
          <BackgroundBeams />
        </div>
        {/* <div className="mt-8">
          <TextGenerateEffect words={words1} />
          <TextGenerateEffect words={words2} />
          <TextGenerateEffect words={words3} />
        </div> */}
        <div className="my-16">
          <Experience />
          {/* <Timeline /> */}
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
