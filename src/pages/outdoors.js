import React, { useEffect } from 'react';

// import icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// import pages
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

// import pictures
import Boats from '../img/California/Boats.JPG';
import BlueLagoon from '../img/Iceland/BlueLagoon.JPG';
import Monterey from '../img/California/MontereyHotTub.JPG';
import PalmSprings2 from '../img/California/PalmSprings2.JPG';
import DeathValley from '../img/California/DeathValley.JPG';
import Bridge from '../img/Iceland/Bridge.jpg';
import RedRock from '../img/Arizona/RedRock.JPG';


import '../css-files/app.css';

export default function Outdoors() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar />
            <h1 className="page-title">OUTDOORS</h1>
            <div>
                <Container>
                    <div className="travel-container">
                        <Row>
                            <Col sm={12} lg={12}><img className="travel-img" src={BlueLagoon} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Boats} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={DeathValley} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={RedRock} alt="" /></Col>    
                            <Col sm={12} lg={12}><img className="travel-img" src={Bridge} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={PalmSprings2} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Monterey} alt="" /></Col>
                        </Row>
                        <Row className="arrows">
                            <div className="left-nav-icon">
                                <Link to="/"><NavigateBeforeIcon style={{ fontSize: 50 }} className="nav-icon"/>HOME</Link>
                            </div>
                            <div>
                                <Link to="/city">CITY<NavigateNextIcon style={{ fontSize: 50 }} className="nav-icon"/></Link>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}