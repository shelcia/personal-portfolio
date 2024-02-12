import React, { lazy, Suspense, ReactElement } from "react";
import LoadingPage from "./pages/others/LoadingPage";
import Layout from "./layout/Layout";

type Route = {
  path: string;
  element: ReactElement;
};

type NestedRoute = Route & {
  children?: Route[];
};

type Routes = NestedRoute[];

const Loadable = (Component: React.ComponentType<any>) => (props: any) =>
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

const routes: Routes = [
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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

export default routes;
