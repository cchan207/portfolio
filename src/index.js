import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import files
import './index.css';
import LandingPage from './pages/landingpage';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Travel from './pages/travel';
import About from './pages/about';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/design" component={Projects} />
      <Route exact path="/travel" component={Travel} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
