import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './navbar.css';

export default function MobileNav() {
    return (
        <div>
            <Navbar expand="lg" className="navBar">
            {/*<Navbar.Brand href="#home"></Navbar.Brand>*/}
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                <Nav.Link className="link">Home</Nav.Link>
                <Nav.Link className="link">Design</Nav.Link>
                <Nav.Link className="link">Travel</Nav.Link>
                <NavDropdown title="Contact" style={{fontSize: '180%'}}>
                    <NavDropdown.Item className="dropdown">Resume</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown">LinkedIn</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown">GitHub</NavDropdown.Item>
                    <NavDropdown.Item className="dropdown">Email</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}