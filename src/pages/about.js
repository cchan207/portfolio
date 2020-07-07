import React from 'react';

// import pages
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

// import libraries
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

// import pictures
import Headshot from '../img/Homepage/Headshot.JPG';

import '../css-files/app.css';

export default function Contact() {
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
                            Hi, welcome to my website! I created this site to experiment with front-end development using ReactJS and share my favorite pictures from 
                            the trips I've been on. I love to travel and explore new places, especially in my home state of California. I'm an avid Yelper and usually 
                            the go-to person for restaurant suggestions. If you're traveling to any of the places I've been to or have any suggestions, feel 
                            free to connect with me on any of the social media listed on my contact page!
                        </p>

                        <h2>MY EXPERIENCE</h2>
                        <p>
                            I am an incoming senior at Purdue University where I'm studying Conmputer Science with a Software Engineering concentration and 
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
            <Footer />
        </div>
    )
}