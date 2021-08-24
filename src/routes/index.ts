import { lazy } from "react";

export interface IRouteItem {
  path: string;
  redirect?: string;
  component?: any;
  exact?: boolean;
  children?: IRouteItem[];
}

export const routes: IRouteItem[] = [
  {
    path: "/",
    redirect: "/index",
    exact: true,
  },
  {
    path: "/index",
    exact: false,
    component: lazy(() => import("@/pages/Home")),
    // children: [
    //   {
    //     path: "/index",
    //     redirect: "/index/populargoods",
    //   },
    //   {
    //     path: "/index/populargoods",
    //     exact: true,
    //     component: lazy(() => import("@/pages/PopularGoods")),
    //   },
    //   {
    //     path: "/index/special",
    //     exact: true,
    //     component: lazy(() => import("@/pages/AccountCenter")),
    //   },
    // ],
  },
  {
    path: "/404",
    exact: true,
    component: lazy(() => import("@/pages/NotFound")),
  },
  // {
  //   path: "/*",
  //   exact: true,
  //   component: lazy(() => import("@/pages/NotFound")),
  // },
];
