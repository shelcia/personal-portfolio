import React, { lazy, Suspense } from "react";
import LoadingPage from "./pages/others/LoadingPage";
import Layout from "./layout/Layout";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingPage />}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/home/index")));
const WorksPage = Loadable(lazy(() => import("./pages/works/index")));
const WorkPage = Loadable(lazy(() => import("./pages/work/index")));
const AboutPage = Loadable(lazy(() => import("./pages/about/index")));
const WritingPage = Loadable(lazy(() => import("./pages/writing/index")));
const ContactPage = Loadable(lazy(() => import("./pages/contact/index")));
const ErrorPage = Loadable(lazy(() => import("./pages/others/404Page")));

// const ProjectPage = Loadable(lazy(() => import("./pages/ProjectPage")));
// const AboutPage = Loadable(lazy(() => import("./pages/AboutPage")));
// const ContactPage = Loadable(lazy(() => import("./pages/Resume")));
// const ErrorPage = Loadable(lazy(() => import("./pages/404Page")));

const routes = [
  {
    path: "/",
    element: <Layout></Layout>,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/works",
        element: <WorksPage />,
      },
      {
        path: "/works/:id",
        element: <WorkPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/devlogs",
        element: <WritingPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/works/:id",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <HomePage />,
  // },
  // {
  //   path: "about",
  //   element: <AboutPage />,
  // },
  // {
  //   path: "resume",
  //   element: <ContactPage />,
  // },
  // {
  //   path: "project/:id",
  //   element: <ProjectPage />,
  // },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
];

export default routes;
