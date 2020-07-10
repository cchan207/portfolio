import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from "react-router-dom";

// import files
import './index.css';
import LandingPage from './pages/landingpage';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Travel from './pages/outdoors';
import Email from './pages/email';
import City from './pages/city';
import About from './pages/about';
import Food from './pages/food';

const routing = (
  <HashRouter basename="/">
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/design" component={Projects} />
      <Route exact path="/travel" component={Travel} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/about" component={About} />
      <Route exact path="/food" component={Food} />
      <Route exact path="/contact" component={Email} />
      <Route exact path="/city" component={City} />
    </div>
  </HashRouter>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
