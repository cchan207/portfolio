import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListGroup from 'react-bootstrap/ListGroup';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';

import './navbar.css';
import { useWindowDimensions } from '../../window.js'

export default function Menu() {
    let { width } = useWindowDimensions();

    return (
        <div>
            <Navbar expand="false" variant="dark" className="navBar">
            <Navbar.Toggle className="expandNav">
                        {width >= 1000 && (
                            <MenuIcon style={{ fontSize: 30 }} className="iconColor"/>
                        )}
                        {width < 1000 && (
                            <MenuIcon style={{ fontSize: 60 }} className="iconColor"/>
                        )}
            </Navbar.Toggle>
            <ListGroup horizontal className="link">
                <ListItemIcon className="listItem">
                    <a href="https://www.linkedin.com/in/cora-chan-251a6315b/" rel="noopener noreferrer" target="_blank">
                        {width >= 1000 && (
                            <LinkedInIcon style={{ fontSize: 30 }} className="iconColor"/>
                        )}
                        {width < 1000 && (
                            <LinkedInIcon style={{ fontSize: 60 }} className="iconColor"/>
                        )}
                    </a>
                </ListItemIcon>
                <ListItemIcon className="listItem">
                    <a href="https://github.com/cchan207" rel="noopener noreferrer" target="_blank">
                        {width >= 1000 && (
                            <GitHubIcon style={{ fontSize: 30 }} className="iconColor"/>
                        )}
                        {width < 1000 && (
                            <GitHubIcon style={{ fontSize: 60 }} className="iconColor"/>
                        )}
                    </a>
                </ListItemIcon>
                <ListItemIcon className="listItem">
                    <Link to='/contact'>
                        {width >= 1000 && (
                            <EmailIcon style={{ fontSize: 30 }} className="iconColor"/>
                        )}
                        {width < 1000 && (
                            <EmailIcon style={{ fontSize: 60 }} className="iconColor"/>
                        )}
                    </Link>
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