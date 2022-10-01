import React, { lazy, Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingPage />}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/HomePage")));
const ProjectPage = Loadable(lazy(() => import("./pages/ProjectPage")));
const AboutPage = Loadable(lazy(() => import("./pages/AboutPage")));
const ContactPage = Loadable(lazy(() => import("./pages/Resume")));
const ErrorPage = Loadable(lazy(() => import("./pages/404Page")));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "project/:id",
    element: <ProjectPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
