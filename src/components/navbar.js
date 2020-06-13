import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListGroup from 'react-bootstrap/ListGroup';
import { useWindowDimensions } from '../window.js';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import './navbar.css';

export default function Menu() {
    let { width } = useWindowDimensions();
    return (
        <div>
            <Navbar expand="false" className="navBar">
            <Navbar.Toggle />
            <ListGroup horizontal className="link">
                <ListItemIcon>
                    <a href="https://www.linkedin.com/in/cora-chan-251a6315b/" rel="noopener noreferrer" target="_blank"><LinkedInIcon className="iconColor"/></a>
                </ListItemIcon>
                <ListItemIcon>
                    <a href="https://github.com/cchan207" rel="noopener noreferrer" target="_blank"><GitHubIcon className="iconColor"/></a>
                </ListItemIcon>
                <ListItemIcon>
                    <Link to='/contact'><EmailIcon className="iconColor"/></Link>
                </ListItemIcon>
            </ListGroup>
            <Navbar.Collapse>
                <Nav className="link">
                    <List>
                        <ListItem button key={'Home'}>
                            <Link to="/">
                                <ListItemText disableTypography>Home</ListItemText>
                            </Link>
                        </ListItem>
                        <ListItem button key={'Home'}>
                            <Link to="/design">
                                <ListItemText disableTypography>Design</ListItemText>
                            </Link>
                        </ListItem>
                        <ListItem button key={'Home'}>
                            <Link to="/travel">
                                <ListItemText disableTypography>Travel</ListItemText>
                            </Link>
                        </ListItem>
                        <ListItem button key={'Resume'}>
                            <Link to="/resume">
                                <ListItemText disableTypography>Resume</ListItemText>
                            </Link>
                        </ListItem>
                    </List>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}