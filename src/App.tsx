import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { routes } from "@/routes";
import RouterView from "@com/RouterView";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          <RouterView routes={routes} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
