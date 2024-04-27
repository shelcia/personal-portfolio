"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { cn } from "@/utils/cn";
import { calsans, dmsans } from "@/utils/fonts";

const Testimonial = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-4",
        dmsans.className
      )}
    >
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        {/* <div className="max-w-xs"> */}
        <h2 className="text-left text-balance text-sm font-semibold tracking-[-0.015em] text-white">
          I had the pleasure of working with Shelcia on a recent project, and I
          couldn&apos;t be happier with the results. From the initial
          consultation to the final delivery, she demonstrated a high level of
          professionalism, expertise, and dedication. She has a keen eye for
          design and a deep understanding of web development technologies. Her
          ability to translate our ideas into a functional and visually
          appealing website was impressive. She was always responsive to
          feedback and made sure that every detail was addressed promptly. What
          sets Shelcia apart is her commitment to delivering quality work on
          time. She consistently met deadlines and exceeded our expectations in
          terms of both design and functionality. Working with her was a
          seamless experience, and I would highly recommend her to anyone
          looking for a talented and reliable web developer
        </h2>
        <p
          className={cn(
            "mt-4 text-left text-xl text-neutral-200",
            calsans.className
          )}
        >
          Moon
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="text-left text-balance text-sm font-semibold tracking-[-0.015em] text-white">
          I had the pleasure of working with Shelcia on a recent project, and I
          couldn&apos;t be happier with the results. From the initial
          consultation to the final delivery, she demonstrated a high level of
          professionalism, expertise, and dedication. She has a keen eye for
        </h2>
        <p
          className={cn(
            "mt-4 text-left text-xl text-neutral-200",
            calsans.className
          )}
        >
          Moon
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-full">
          <h2 className="text-left text-balance text-sm font-semibold tracking-[-0.015em] text-white">
            I had the pleasure of working with Shelcia on a recent project, and
            I couldn&apos;t be happier with the results. From the initial
            consultation to the final delivery, she demonstrated a high level of
            professionalism, expertise, and dedication. She has a keen eye for
            design and a deep understanding of web development technologies. Her
            ability to translate our ideas into a functional and visually
            appealing website was impressive. She was always responsive to
            feedback and made sure that every detail was addressed promptly.
            What sets Shelcia apart is her commitment to delivering quality work
            on time. She consistently met deadlines and exceeded our
            expectations in terms of both design and functionality. Working with
            her was a seamless experience, and I would highly recommend her to
            anyone looking for a talented and reliable web developer
          </h2>
          <p
            className={cn(
              "mt-4 text-left text-xl text-neutral-200",
              calsans.className
            )}
          >
            Moon
          </p>
        </div>
      </WobbleCard>
    </div>
  );
};

export default Testimonial;
