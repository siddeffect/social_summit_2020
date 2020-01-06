import React, { useEffect } from "react";
import Home from "./client/Home/Home";
import ComingSoon from "./client/ComingSoon/ComingSoon";
import PageNotFound from "./client/404/404";
import CAPage from "./client/CA/Index";
import CARegistration from "./client/CA/auth/SignUp";
import CALogin from "./client/CA/auth/SignIn";
import CADashboard from "./client/CA/dashboard/Dashboard";
import ParticipantSignIn from "./client/Participants/auth/SignIn";
import ParticipantSignUp from "./client/Participants/auth/SignUp";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import MUN from "./client/MUN/MUN";

const Page404 = ({ location }) => (
  <div style={{ textAlign: "center", color: "#319788", fontSize: "1em" }}>
    <PageNotFound />
    <h2>
      No match found for <code>{location.pathname}</code>
    </h2>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <ParticipantSignIn />
        </Route>
        <Route exact path="/signup">
          <ParticipantSignUp />
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
          <MUN />
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
    </Router>
  );
}

export default App;
