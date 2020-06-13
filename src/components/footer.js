import React from 'react';

import './footer.css';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Footer() {
    return (
        <div>
            <Navbar fixed="bottom" className="footer">
            <ListGroup horizontal className="fLink">
                <ListItem button key={'Home'}>
                    <Link to="/">
                        <ListItemText disableTypography>Resume</ListItemText>
                    </Link>
                </ListItem>
                <ListItem button key={'LinkedIn'}>
                    <a href="https://www.linkedin.com/in/cora-chan-251a6315b/" rel="noopener noreferrer" target="_blank">
                        <ListItemText disableTypography>LinkedIn</ListItemText>
                    </a>
                </ListItem>
                <ListItem button key={'GitHub'}>
                    <a href="https://github.com/cchan207" rel="noopener noreferrer" target="_blank">
                        <ListItemText disableTypography>GitHub</ListItemText>
                    </a>
                </ListItem>
                <ListItem button key={'Email'}>
                    <Link to="/">
                        <ListItemText disableTypography>Email</ListItemText>
                    </Link>
                </ListItem>
            </ListGroup>
            </Navbar>
        </div>
    );
}