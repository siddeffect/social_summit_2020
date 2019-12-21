import React from "react";
import Home from "./client/Home/Home";
import ComingSoon from "./client/ComingSoon/ComingSoon";
import PageNotFound from "./client/404/404";
import CAPage from "./client/CA/Index";
import CARegistration from "./client/CA/auth/SignUp";
import CALogin from "./client/CA/auth/SignIn";
import CADashboard from "./client/CA/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MUNHome from "./client/MUN/Main/MUNHome";

const Page404 = ({ location }) => (
  <div style={{ textAlign: "center", color: "#319788", fontSize: "1em" }}>
    <PageNotFound />
    <h2>
      No match found for <code>{location.pathname}</code>
    </h2>
  </div>
);

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
          <Route exact path="/campusambassador">
            <CAPage />
          </Route>
          <Route exact path="/campusambassador/signup">
            <CARegistration />
          </Route>
          <Route exact path="/campusambassador/signin">
            <CALogin />
          </Route>
          <Route exact path="/campusambassador/dashboard">
            <CADashboard />
          </Route>
          <Route exact path="/mun">
            <MUNHome />
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
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
