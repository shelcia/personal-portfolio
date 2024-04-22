import React, { useEffect, useState } from "react";
import Footer from "@/components/common/Footer";
import Topbar from "@/components/common/Topbar";
import { useRouter } from "next/router";
import { projects } from "@/context/ProjectContext";
import { Project } from "@/types";
import { calsans, dmsans } from "@/utils/fonts";
import { cn } from "@/utils/cn";
import ProjectInfoCards from "../components/ProjectInfoCards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";

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
      <main className={cn("mb-32 md:px-24 px-4 relative", dmsans.className)}>
        {/* <DotBackground> */}
        <div
          className={`md:max-w-4xl max-w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ${dmsans.className} mt-4 z-30`}
        >
          <div className="h-48 relative w-full overflow-hidden bg-white flex flex-col items-center justify-center z-40">
            <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes className="border-slate-200" />
            <TypewriterEffect
              words={words}
              className={`font-bold text-3xl text-white dark:text-neutral-200 relative z-20 ${calsans.className}`}
            />
            {/* <h1
              className={cn(
                "md:text-6xl text-3xl text-white relative z-20",
                calsans.className
              )}
            >
              Devlogs{" "}
            </h1> */}
          </div>

          <div
            className={cn(
              "max-w-4xl font-semibold mx-auto my-8",
              calsans.className
            )}
          >
            {proj?.description}
          </div>
          {proj && <ProjectInfoCards project={proj} />}
        </div>
        {/* </DotBackground> */}
        <BackgroundBeams />
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
