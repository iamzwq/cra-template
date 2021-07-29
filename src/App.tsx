import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { routes } from "@/routes";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/index" />} />
          {routes.map(({ component: Component, path }) => (
            <Route
              key={path}
              path={path}
              exact
              render={(props) => <Component {...props} />}
            />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
