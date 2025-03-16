import { lazy } from "react";
import { createHashRouter } from "react-router-dom";

import Main from "@/components/Layout/Main";

// Lazy load the component
const HomeScreen = lazy(() => import("@/pages/home/HomeScreen"));

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
];

const router = createHashRouter(routes);

export default router;
