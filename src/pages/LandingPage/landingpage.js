import React, { Component } from 'react';

// import files
import Navbar from '../../components/navbar';
import './landingpage.css';
import { useWindowDimensions } from '../../window.js';

// import libraries
import {Container, Row, Col} from 'react-bootstrap';
import Box from '@material-ui/core/Box';

// import pictures
import Sunflowers from '../../img/Sunflowers.JPG';
import SunflowersCrop from '../../img/SunflowersCrop.JPG';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col lg={4} className="firstColumn">
                        <div>
                            <h1 className="title">CORA CHAN</h1>
                            <h3 className="subtitle">Software Development Engineer Intern at Amazon</h3>
                        </div>
                        <hr />
                        <div className="p">
                            Hi, welcome to my website! I'm an incoming senior at Purdue University looking for full-time opportunities. 
                            I created this site to learn some front-end development using ReactJS and keep a travel photo journal. My goal is 
                            to visit all 50 states and at least one country on every continent!
                        </div>
                    </Col>
                    <Col lg={4} className="secondColumn">
                        <img className="portfolioImg" src={Sunflowers} alt="PortfolioImage" />
                    </Col>
                    <Col lg={2} className="hiddenColumn">
                        <header className="boxLg"></header>
                        <img className="flowerImg" src={SunflowersCrop} alt="Sunflowers" />
                    </Col>
                </Row>
            </Container>
            {/*
            <img className="flowerImg" src={SunflowersCrop} alt="Sunflowers" />
            <img className="portfolioImg" src={Sunflowers} alt="PortfolioImage" />
                <div className="aboutMe">
                    <h2 className="title">Cora Chan</h2>
                    <p className="description">This is my about me section. It is aligned to the bottom of its containing element.</p>
                </div>
            */}
        </div>
    )
}