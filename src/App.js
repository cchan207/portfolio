import React, { Component } from 'react';

// import components
import Navbar from 'react-bootstrap/Navbar';
import { Button, Form, Nav, FormControl } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import pages
import LandingPage from './components/landingpage';
import About from './components/about';
import Projects from './components/projects';

function App() {
  return (
   <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">Cora Chan</Navbar.Brand>
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

export default App;
