import Head from "next/head";

export const SITE_URL = "https://www.shelcia-dev.me";
const SITE_NAME = "Shelcia David";
const DEFAULT_IMAGE = "/social-graph-image.webp";

interface SeoProps {
  title: string;
  description: string;
  // Path of the page, e.g. "/about"; used for the canonical and og:url.
  path: string;
  image?: string;
}

const Seo = ({ title, description, path, image = DEFAULT_IMAGE }: SeoProps) => {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  // Social crawlers need absolute image URLs.
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};

export default Seo;
