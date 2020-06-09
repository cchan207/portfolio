import React, { Component } from 'react';

// import files
import Navbar from '../../components/navbar';
import './landingpage.css';

// import libraries
import {Container, Row, Col} from 'react-bootstrap';

// import pictures
import Sunflowers from '../../img/Sunflowers.JPG';
import Astros from '../../img/Astros.jpeg';
import AustinBridge from '../../img/AustinBridge.JPG';
import MontereyBeach from '../../img/MontereyBeach.jpeg';
import WildAtHeart from '../../img/WildAtHeart.JPG';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Container className="container">
                <Row>
                    <Col lg={5}>About me</Col>
                    <Col lg={6}><img className="image" src={AustinBridge} alt="PersonalPicTwo"/></Col>
                </Row>
                <Row>
                    <Col>About me</Col>
                    <Col><img className="image" src={WildAtHeart} alt="PersonalPicThree"/></Col>
                </Row>
            </Container>
        </div>
    )
}