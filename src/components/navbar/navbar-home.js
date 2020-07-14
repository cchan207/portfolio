import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListGroup from 'react-bootstrap/ListGroup';
import ListItemText from '@material-ui/core/ListItemText';
import DragHandleIcon from '@material-ui/icons/DragHandle';

import './navbar.css';
import { useWindowDimensions } from '../../window.js'

export default function Menu() {
    let { width } = useWindowDimensions();

    return (
        <div>
            {/* For desktop */}
            {width > 1000 && (
                <Navbar expand="false" variant="dark" className="justify-content-end">
                <ListGroup horizontal className="link">
                    <Link to="/">
                        <ListItem button key={'Home'}>
                                <ListItemText disableTypography>HOME</ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/about">
                        <ListItem button key={'About'}>
                                <ListItemText disableTypography>ABOUT</ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/resume">
                        <ListItem button key={'Resume'}>
                                <ListItemText disableTypography>RESUME</ListItemText>
                        </ListItem>
                    </Link>
                </ListGroup>
                </Navbar>
            )}
            {/* For mobile */}
            {width <= 1000 && (
                <Navbar expand="false" variant="light" className="navbar">
                <Navbar.Brand href="/" className="brand">CORA CHAN</Navbar.Brand>
                <Navbar.Toggle>
                    <DragHandleIcon style={{ fontSize: 80 }} className="toggle-icon"/>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="link">
                        <List>
                            <Link to="/">
                                <ListItem button key={'Home'}>
                                        <ListItemText disableTypography>HOME</ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/about">
                                <ListItem button key={'About'}>
                                        <ListItemText disableTypography>ABOUT</ListItemText>
                                </ListItem>
                            </Link>
                            <Link to="/resume">
                                <ListItem button key={'Resume'}>
                                        <ListItemText disableTypography>RESUME</ListItemText>
                                </ListItem>
                            </Link>
                        </List>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            )}

        </div>
    );
}