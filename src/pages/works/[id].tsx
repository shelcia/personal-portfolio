import React, { useEffect, useState } from "react";
import Footer from "@/components/common/Footer";
import Topbar from "@/components/common/Topbar";
import { useRouter } from "next/router";
import { projects } from "@/context/ProjectContext";
import { Project } from "@/types";
import { calsans, dmsans } from "@/utils/fonts";
import { cn } from "@/utils/cn";
import ProjectImages from "../components/ProjectImages";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { Badge } from "../components/Experience";
import Link from "next/link";
import { ShimmerButton } from "@/components/common/CustomButtons";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const ProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  const [proj, setProj] = useState<Project>({
    id: "mocker",
    name: "Mocker",
    mockup:
      "https://ik.imagekit.io/shelcia/my_portfolio/mockup/mocker_FhIiA_GE6v.webp?updatedAt=1701194092672",
    images: [],
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
        <div
          className={`md:max-w-4xl max-w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ${dmsans.className} mt-2 z-30`}
        >
          <button
            type="button"
            onClick={() => router.back()}
            className="py-4 flex gap-1 items-center text-sm font-medium hover:underline"
          >
            <ArrowLeftIcon /> Go back
          </button>
          <TextRevealCard
            text={proj?.name}
            revealText={proj?.name}
          ></TextRevealCard>

          {/* <div className="h-48 relative w-full overflow-hidden bg-white flex flex-col items-center justify-center z-40">
            <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes className="border-slate-200" />
            <TypewriterEffect
              words={words}
              className={`font-bold text-3xl text-white dark:text-neutral-200 relative z-20 ${calsans.className}`}
            />
          </div> */}

          <div className="flex flex-wrap gap-1 mt-4">
            {proj?.techstack?.map((itm) => (
              <Badge title={itm} key={itm} />
            ))}
          </div>

          <div
            className={cn(
              "max-w-4xl font-medium text-gray-800 mx-auto my-4",
              dmsans.className
            )}
          >
            {proj?.description}
          </div>

          <div className="flex flex-wrap gap-2">
            {proj?.deployment && (
              <Link href={proj.deployment} target="_blank">
                <ShimmerButton title="Deployment" />
              </Link>
            )}
            {proj?.code && (
              <Link href={proj.code} target="_blank">
                <ShimmerButton title="Code on Github" />
              </Link>
            )}
          </div>
          <div className="mt-8">
            <h3 className={cn("text-2xl text-black mb-4", calsans.className)}>
              Screengrabs from website
            </h3>
            <ProjectImages />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
