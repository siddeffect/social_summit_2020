import React from "react";
import Home from "./client/Home/Home";
import ComingSoon from "./client/ComingSoon/ComingSoon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/events">
            <ComingSoon />
          </Route>
          <Route exact path="/about">
            <ComingSoon />
          </Route>
          <Route exact path="/team">
            <ComingSoon />
          </Route>
          <Route exact path="/contact">
            <ComingSoon />
          </Route>
          <Route exact path="/partners">
            <ComingSoon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
