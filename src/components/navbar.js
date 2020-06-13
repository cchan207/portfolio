import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListGroup from 'react-bootstrap/ListGroup';

import './navbar.css';

export default function Menu() {
    return (
        <div>
            <Navbar expand="false" className="navBar">
            <Navbar.Toggle />
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
                    </List>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}