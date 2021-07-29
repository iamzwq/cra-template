import { lazy } from "react";

interface IRouteItem {
  path: string;
  component: any;
}

export const routes: IRouteItem[] = [
  {
    path: "/index",
    component: lazy(() => import("@/pages/Home")),
  },
  {
    path: "*",
    component: lazy(() => import("@/pages/NotFound")),
  },
];
