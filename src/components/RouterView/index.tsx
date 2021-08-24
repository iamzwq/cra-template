/*
 * @Author: wenqiang.zhang
 * @Date: 2021-08-16 11:14:39
 * @LastEditTime: 2021-08-16 14:52:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \douyin-koc-pc\src\components\RouterView\index.tsx
 */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { IRouteItem } from "@/routes";

const RouterView = ({ routes }: { routes: IRouteItem[] }) => {
  const normalRoutes = routes.filter((item) => !item.redirect);
  const redirectRoutes = routes
    .filter((item) => item.redirect)
    .map((item, index) => (
      <Redirect from={item.path} to={item.redirect || ""} key={index} />
    ));

  return (
    <Switch>
      {normalRoutes
        .map(({ component: Component, path, children = [], exact }, index) => (
          <Route
            key={index}
            exact={exact}
            path={path}
            render={(props) => <Component {...props} routes={children} />}
          />
        ))
        .concat(redirectRoutes)}
    </Switch>
  );
};

export default RouterView;
