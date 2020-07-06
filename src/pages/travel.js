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
import Clock from '../img/Illinois/Clock.JPG';
import Monterey from '../img/California/MontereyHotTub.JPG';
import Valentines from '../img/Indiana/ValentinesDinner.JPG';
import DevilsBridge from '../img/Arizona/DevilsBridge.JPG';
import Vegas from '../img/Nevada/Vegas.JPG';
import CityMuseum from '../img/Missouri/CityMuseum.JPG';
import VanWert from '../img/Ohio/VanWert.JPG';
import Sunset from '../img/Mexico/Sunset.JPG';
import Resort from '../img/Hawaii/Resort.JPG';

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
                            <Col sm={12} lg={12}><img className="travel-img" src={Austin} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Sunset} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={RH} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Clock} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Boats} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={VanWert} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Valentines} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={DevilsBridge} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Vegas} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Resort} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={CityMuseum} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Monterey} alt="" /></Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}