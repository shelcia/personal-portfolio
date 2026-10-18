import React from "react";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Footer from "@/components/common/Footer";
import Topbar from "@/components/common/Topbar";
import { useRouter } from "next/router";
import { projects } from "@/context/ProjectContext";
import { Project } from "@/types";
import { calsans, dmsans } from "@/utils/fonts";
import { cn } from "@/utils/cn";
import ProjectImages from "@/components/sections/ProjectImages";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { Badge } from "@/components/sections/Experience";
import { ShimmerButton } from "@/components/common/CustomButtons";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Seo from "@/components/common/Seo";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: projects.map((itm) => ({ params: { id: itm.id } })),
  fallback: false,
});

// Project data holds JSX and image imports, so only the id goes through props.
export const getStaticProps: GetStaticProps<{ id: string }> = ({ params }) => ({
  props: { id: String(params?.id) },
});

const ProjectPage = ({
  id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const proj = projects.find((itm) => itm.id === id) as Project;

  return (
    <>
      <Seo
        title={`${proj.name} | Shelcia David`}
        description={proj.desc ?? proj.name}
        path={`/works/${proj.id}`}
      />
      <Topbar />
      <main
        id="main-content"
        tabIndex={-1}
        className={cn(
          "outline-none mb-32 md:px-24 px-4 relative",
          dmsans.className,
        )}
      >
        <div
          className={`md:max-w-4xl max-w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white ${dmsans.className} mt-2 z-30`}
        >
          <button
            type="button"
            onClick={() => router.back()}
            className="py-4 flex gap-1 items-center text-sm font-medium hover:underline"
          >
            <ArrowLeftIcon /> Go back
          </button>
          <h1 className="sr-only">{proj.name}</h1>
          <span className="hidden md:block" aria-hidden="true">
            <TextRevealCard
              text={proj?.name}
              revealText={proj?.name}
            ></TextRevealCard>
          </span>

          <span className="md:hidden block" aria-hidden="true">
            <div
              className={cn(
                "bg-[#1d1c20] w-full rounded-lg p-4 relative overflow-hidden",
                calsans.className,
              )}
            >
              <p
                style={{
                  textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                }}
                className="text-3xl py-10 font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-neutral-300 text-center"
              >
                {proj?.name}
              </p>
            </div>
          </span>

          {/* <div className="h-48 relative w-full overflow-hidden bg-white flex flex-col items-center justify-center z-40">
            <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes className="border-slate-200" />
            <TypewriterEffect
              words={words}
              className={`font-bold text-3xl text-white relative z-20 ${calsans.className}`}
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
              dmsans.className,
            )}
          >
            {proj?.description}
          </div>
          {proj?.id === "irul-theme" && (
            <div className="mb-4 flex gap-2 flex-wrap">
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                {proj?.forks} Downloads
              </kbd>
            </div>
          )}
          {proj?.forks !== 0 && proj?.id !== "irul-theme" && (
            <div className="mb-4 flex gap-2 flex-wrap">
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                {proj?.forks} Forks
              </kbd>
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                {proj?.stars} Stars
              </kbd>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {proj?.deployment && (
              <ShimmerButton
                title="Deployment"
                href={proj.deployment}
                external
              />
            )}
            {proj?.code && proj.code !== "" && (
              <ShimmerButton title="Code on Github" href={proj.code} external />
            )}
          </div>
          {proj?.images && (
            <div className="mt-8">
              <h2 className={cn("text-2xl text-black mb-4", calsans.className)}>
                Screengrabs from website
              </h2>
              <ProjectImages images={proj.images} />
            </div>
          )}
        </div>
        <div className="text-center	mt-4">
          <ShimmerButton title="See More Projects!" href="/works" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
