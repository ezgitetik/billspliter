import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Event from "./views/Event/Event";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/event/:trip">
          <Event />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
