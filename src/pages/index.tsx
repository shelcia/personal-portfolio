// pages/index.js
import React from "react";
import Header from "./components/Header";
import { FeaturedProjectCard } from "./components/ProjectCard";
import { Project } from "@/types";
import { featuredProjects } from "@/context/FeaturedProjectsContext";
import { calsans } from "@/utils/fonts";
import Footer from "@/components/common/Footer";
import "../app/globals.css";
import RootLayout from "@/app/layout";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import MicrosoftClarity from "@/components/common/Metrics";

// import Testimonial from "./components/Testimonial";

// import Hotjar from "@hotjar/browser";

// const siteId = 4974720;
// const hotjarVersion = 6;

// Hotjar.init(siteId, hotjarVersion);

const Home = () => {
  return (
    <>
      <Head>
        <GoogleAnalytics gaId="G-CCSE78VCSN" />
        <title>Shelcia David&apos;s Portfolio</title>
        <meta
          name="description"
          content="Experienced Full Stack developer and designer.
          Contributed to NASDAQ and startups like HIRA, NYX Wolves, Solera, and
          Guvi. Pursuing Master's in Information at the University of
          Wisconsin - Madison. Explore my portfolio for innovative solutions and
          designs"
        />
        <meta property="og:image" content="/social-graph-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.shelcia-dev.me/" />
        <meta property="og:type" content="website" />
        <MicrosoftClarity />
      </Head>
      <main suppressHydrationWarning={true}>
        <Header />
        {/* <div
          className="w-full rounded-md bg-zinc-50 antialiased 
        // bg-grid-black/[0.05] 
        relative overflow-hidden"
        > */}
        <div className="w-full rounded-md bg-zinc-50 antialiased relative overflow-hidden pt-16">
          <div className="p-4 max-w-7xl mx-auto relative z-10">
            <h1
              className={`text-3xl md:text-6xl font-bold text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-2 ${calsans.className}`}
            >
              Featured Works
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-16 mt-4">
              {featuredProjects &&
                featuredProjects.map((project: Project) => (
                  <FeaturedProjectCard
                    title={project.name}
                    image={project.image}
                    link={project.deployment}
                    key={project.id}
                    desc={project.desc}
                    name={project.id}
                  />
                ))}
            </div>
          </div>
          {/* <div className="p-4 max-w-7xl mx-auto relative z-10">
            <h1
              className={`text-3xl md:text-6xl font-bold text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-6 mb-16 ${calsans.className}`}
            >
              What People say ?
            </h1>
            <Testimonial />
          </div> */}
        </div>
        {/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-zinc-50 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}
      </main>
      <Footer />
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
