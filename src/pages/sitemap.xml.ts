import type { GetServerSideProps } from "next";
import { projects } from "@/context/ProjectContext";
import { SITE_URL } from "@/components/common/Seo";

// Built from the project list so new or removed projects never go stale.
const paths = [
  "/",
  "/about",
  "/works",
  "/devlogs",
  "/contact",
  ...projects.map((project) => `/works/${project.id}`),
];

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls = paths
    .map((path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`)
    .join("\n");

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400");
  res.write(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  res.end();

  return { props: {} };
};

const Sitemap = () => null;

export default Sitemap;
