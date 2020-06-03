import React, { Component } from 'react';

// import components
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import pages
import LandingPage from './components/LandingPage/landingpage';
import About from './components/About/about';
import Projects from './components/Projects/projects';

export default function App() {
  return (
   <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Cora Chan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />        
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/projects">Projects</Link>
        </Nav.Link>
      </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/" component={LandingPage}></Route>/>
        <Route exact path="/about" component={About}></Route>/>
        <Route exact path="/projects" component={Projects}></Route>/>
      </Switch>
    </Router>
  )
}
