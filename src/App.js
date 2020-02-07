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
import ParticipantDashboard from "./client/Participants/ParticipantsDashboard/Dashboard";
import Events from "./client/Events/Event";
import SocialConclave from "./client/SocialConclave/SocialConclave";
import EventDetails from "./client/Events/EventDetails";
import Partners from "./client/Partners/Partners";
import Speakers from "./client/Speakers/Speakers";
import ContactUs from "./client/Contact/ContactUs";

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
        <Route exact path="/signin">
          <ParticipantSignIn />
        </Route>
        <Route exact path="/signup">
          <ParticipantSignUp />
        </Route>
        <Route exact path="/dashboard">
          <ParticipantDashboard />
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
        <Route exact path="/event">
          <Events />
        </Route>
        <Route exact path="/socialConclave">
          <SocialConclave />
        </Route>
        <Route exact path="/partners">
          <Partners />
        </Route>
        {/* <Route exact path="/team">
          <Team />
        </Route>
        */}
        <Route exact path="/speakers">
          <Speakers />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>

        {/* events routs */}
        <Route exact path="/event/modelunitedNation">
          <EventDetails eventType="modelUnitedNation" />
        </Route>
        <Route exact path="/event/caseStudy">
          <EventDetails eventType="caseStudy" />
        </Route>
        <Route exact path="/event/nukkadNatak">
          <EventDetails eventType="nukkadNatak" />
        </Route>
        <Route exact path="/event/innovision">
          <EventDetails eventType="innovision" />
        </Route>
        <Route exct path="/event/sociothon">
          <EventDetails eventType="sociothon" />
        </Route>
        <Route exact path="/event/policyCaseCompetition">
          <EventDetails eventType="policyCaseCompetition" />
        </Route>
        <Route exact path="/event/actionPlan">
          <EventDetails eventType="actionPlan" />
        </Route>
        <Route exact path="/event/roundTableConference">
          <EventDetails eventType="roundTableConference" />
        </Route>
        <Route exact path="/event/1080p">
          <EventDetails eventType="videoMaking" />
        </Route>
        <Route exact path="/event/workshop">
          <EventDetails eventType="workshop" />
        </Route>
        <Route exact path="/event/innovision">
          <EventDetails eventType="innovision" />
        </Route>
        <Route exact path="/event/pixels">
          <EventDetails eventType="pixels" />
        </Route>
        <Route exact path="/event/inquizition">
          <EventDetails eventType="inquizition" />
        </Route>
        <Route exact path="/event/microfiction">
          <EventDetails eventType="microfiction" />
        </Route>
        <Route exact path="/event/caricature">
          <EventDetails eventType="caricature" />
        </Route>

        <Route exact path="/about">
          <ComingSoon />
        </Route>
        <Route exact path="/contact">
          <ComingSoon />
        </Route>
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
