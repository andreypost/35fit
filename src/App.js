import React from "react";
import { HashRouter, Route } from "react-router-dom";
// import {BrowserRouter as Router, Route} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageMain from './PageMain';
import PageTraining from './PageTraining';
import PagePricing from './PagePricing';
import PageSchedule from './PageSchedule';
import PageTeam from './PageTeam';
import PageTeamCoach from './PageTeamCoach';
import PageClub from './PageClub';
import PageFaq from './PageFaq';

export const App = () => {
  return (
    <HashRouter basename='/'>
        <Route exact path="/" component={PageMain} />
        <Route path="/training" component={PageTraining} />
        <Route path="/pricing" component={PagePricing} />
        <Route path="/schedule" component={PageSchedule} />
        <Route path="/team" component={PageTeam} />
        <Route path="/team_coach" component={PageTeamCoach} />
        <Route path="/club" component={PageClub} />
        <Route path="/faq" component={PageFaq} />
    </HashRouter>


    // <Router>
    //     <Route exact path="/" component={PageMain} />
    //     <Route path="/training" component={PageTraining} />
    //     <Route path="/pricing" component={PagePricing} />
    //     <Route path="/schedule" component={PageSchedule} />
    //     <Route path="/team" component={PageTeam} />
    //     <Route path="/club" component={PageClub} />
    //     <Route path="/faq" component={PageFaq} />
    // </Router>


  // <Router>
    //   <Switch>
    //     <Route path="/faq">
    //       <PageFaq />
    //     </Route>
    //     <Route path="/club">
    //       <PageClub />
    //     </Route>
    //     <Route path="/team">
    //       <PageTeam />
    //     </Route>
    //     <Route path="/schedule">
    //       <PageSchedule />
    //     </Route>
    //     <Route path="/pricing">
    //       <PagePricing />
    //     </Route>
    //     <Route path="/training">
    //       <PageTraining />
    //     </Route>
    //     <Route exact path="/">
    //       <PageMain />
    //     </Route>
    //   </Switch>
    //  </Router>
  );
}