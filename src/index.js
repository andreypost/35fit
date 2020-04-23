import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './normalize.css';
import './index.css';
// import { StateUsage } from './StateUsage.js';

import Main from './Main';
import Training from './Training';
import Pricing from './Pricing';
import Schedule from './Schedule';
import Team from './Team';
import Coach_Joyce from './Coach_Joyce';
import Coach_John from './Coach_John';
import Coach_Samantha from './Coach_Samantha';
import Coach_Cameron from './Coach_Cameron';
import Coach_Marvin from './Coach_Marvin';
import Coach_Kayla from './Coach_Kayla';
import Club from './Club';
import Blog from './Blog';
import Blog_Article from './Blog_Article';
import Faq from './Faq';
import Reserve_Choose from './Reserve_Choose';
import Reserve_Identify from './Reserve_Identify';
import Reserve_Member from './Reserve_Member';
import Dash_Profile from './Dash_Profile';

const App = () => {
  return (
    <HashRouter basename='/'>
        <Route exact path="/" component={Main} />
        <Route path="/training" component={Training} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/team" component={Team} />
        <Route path="/coach_joyce" component={Coach_Joyce} />
        <Route path="/coach_john" component={Coach_John} />
        <Route path="/coach_samantha" component={Coach_Samantha} />
        <Route path="/coach_cameron" component={Coach_Cameron} />
        <Route path="/coach_marvin" component={Coach_Marvin} />
        <Route path="/coach_kayla" component={Coach_Kayla} />
        <Route path="/club" component={Club} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog_article" component={Blog_Article} />
        <Route path="/faq" component={Faq} />
        <Route path="/reserve_choose" component={Reserve_Choose} />
        <Route path="/reserve_identify" component={Reserve_Identify} />
        <Route path="/reserve_member" component={Reserve_Member} />
        <Route path="/dash_profile" component={Dash_Profile} />
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

// <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&display=swap" rel="stylesheet">
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<StateUsage />, document.getElementById('roof'))


/*
function* suiquance() {
    yield 6
    yield 33
    return 88
}
let gen = suiquance()

let one = gen.next()
console.log(one)

let two = gen.next()
console.log(two)

let tree = gen.next()
console.log(tree)

let four = gen.next()
console.log(four)
*/