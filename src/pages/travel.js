import React from 'react';

// import pages
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

// import pictures
import Austin from '../img/Texas/AustinBridge.JPG';
import Boats from '../img/California/Boats.JPG';
import BlueLagoon from '../img/Iceland/BlueLagoon.JPG';
import RH from '../img/NewYork/RH.JPG';
import Monterey from '../img/California/MontereyHotTub.JPG';
import CityMuseum from '../img/Missouri/CityMuseum.JPG';
import Chase from '../img/Illinois/ChaseTower.JPG';
import PalmSprings2 from '../img/California/PalmSprings2.JPG';
import HighLine from '../img/NewYork/HighLine.JPG';
import Odezsa from '../img/Texas/Odezsa.JPG';
import KemahBW from '../img/Texas/KemahBW.JPG';
import DeathValley from '../img/California/DeathValley.JPG';


import '../css-files/app.css';

export default function Travel() {
    return (
        <div>
            <Navbar />
            <h1 className="page-title">TRAVEL</h1>
            <div>
                <Container>
                    <div className="travel-container">
                        <Row>
                            <Col sm={12} lg={12}><img className="travel-img" src={BlueLagoon} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Chase} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={RH} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Boats} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={DeathValley} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={KemahBW} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={CityMuseum} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Odezsa} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Austin} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Monterey} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={PalmSprings2} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={HighLine} alt="" /></Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}