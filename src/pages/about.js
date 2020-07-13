import React, { useEffect } from 'react';

// import pages
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { useWindowDimensions } from '../window.js';

// import libraries
import {Container, Row, Col} from 'react-bootstrap';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from "react-router-dom";

// import pictures
import Headshot from '../img/Homepage/Headshot.JPG';

import '../css-files/app.css';

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let { width } = useWindowDimensions();

    return (
        <div>
            <Navbar />
            <h1 className="page-title">ABOUT ME</h1>
            <div className="about-container">
                <Container>
                    <Row className="about-img">
                        <img className="headshot" src={Headshot} alt="Headshot" />
                    </Row>
                    <Row className="about-text">
                        <div>
                            <h2>INTRODUCTION</h2>
                            <p>
                                Hi, welcome to my website! I created this site to experiment with front-end development using ReactJS and share some of my favorite pictures from 
                                the trips I've been on. As of now, most of these pictures were taken on recent trips to Iceland; New York City, New York; Austin, Texas; 
                                Sodona, Arizona; Chicago, Illinois; and different cities in my homestate of California. I've also been to Costa Rica, Japan, Newfoundland, China, and 
                                20 states in the US. It's my goal to visit all 50 someday! Check out the contact section below to view my photo archive for more pictures 
                                (coming soon) or feel free to connect with me on any of the social media listed.
                            </p>

                            <h2>EXPERIENCE</h2>
                            <p>
                                I am an incoming senior at Purdue University where I'm studying Computer Science with a Software Engineering concentration and 
                                Business Economics minor. I have two years of technical work experience designing and implementing projects, executing deployments, 
                                and developing my communication and presentation skills. I strongly believe that balance is key to a successful career - a tenet that 
                                I live out by leaving my desk! I enjoy traveling, hiking, and eating at different restaurants. I'm currently interning with Amazon Web 
                                Services as a Software Development Engineer and am looking for full time positions starting late Summer 2021 
                                with an emphasis on collaboration and leadership. You can view my resume{' '}
                                <Link to="/resume">here</Link>.
                            </p>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="contact-container">
                <Container>
                    <Row>
                        <div>
                            <h1 className="contact-title">CONTACT</h1>
                            <h4>EMAIL</h4>
                            <p>chan207@purdue.edu</p>
                            <h4>PHOTO ARCHIVE</h4>
                            <p>Coming soon!</p>

                            <div className="icons-container">
                                <ListGroup horizontal>
                                    <ListGroupItem className="justify-content-between" className="icons-group">
                                        <a href="https://www.linkedin.com/in/cora-chan-251a6315b/" rel="noopener noreferrer" target="_blank">
                                            { width > 1000 && (
                                                <LinkedInIcon style={{ fontSize: 30 }} className="icon"/>
                                            )}
                                            { width <= 1000 && (
                                                <LinkedInIcon style={{ fontSize: 60 }} className="icon"/>
                                            )}
                                        </a>
                                    </ListGroupItem>
                                    <ListGroupItem className="justify-content-between" className="icons-group">
                                        <a href="https://github.com/cchan207" rel="noopener noreferrer" target="_blank">
                                            { width > 1000 && (
                                                <GitHubIcon style={{ fontSize: 30 }} className="icon"/>
                                            )}
                                            { width <= 1000 && (
                                                <GitHubIcon style={{ fontSize: 60 }} className="icon"/>
                                            )}
                                        </a>
                                    </ListGroupItem>
                                    <ListGroupItem className="justify-content-between" className="icons-group">
                                        <a href="mailto:chan207@purdue.edu">
                                            { width > 1000 && (
                                                <EmailIcon style={{ fontSize: 30 }} className="icon"/>
                                            )}
                                            { width <= 1000 && (
                                                <EmailIcon style={{ fontSize: 60 }} className="icon"/>       
                                            )}                     
                                        </a>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}