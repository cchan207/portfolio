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
import CityMuseum from '../img/Missouri/CityMuseum.JPG';
import Chase from '../img/Illinois/ChaseTower.JPG';
import HighLine from '../img/NewYork/HighLine.JPG';
import Odezsa from '../img/Texas/Odezsa.JPG';
import KemahBW from '../img/Texas/KemahBW.JPG';
import Balboa from '../img/California/Balboa.JPG';
import SFMural from '../img/California/SFMural.JPG';


import '../css-files/app.css';

export default function City() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div>
            <Navbar />
            <h1 className="page-title">CITY</h1>
            <div>
                <Container>
                    <div className="travel-container">
                        <Row>
                            <Col sm={12} lg={12}><img className="travel-img" src={Chase} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Odezsa} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={HighLine} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={KemahBW} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={CityMuseum} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={SFMural} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Balboa} alt="" /></Col>
                        </Row>
                        <Row className="arrows">
                            <div className="left-nav-icon">
                                <Link to="/travel"><NavigateBeforeIcon style={{ fontSize: 50 }} className="nav-icon"/>OUTDOORS</Link>
                            </div>
                            <div className="right-nav-icon">
                                <Link to="/food">FOOD<NavigateNextIcon style={{ fontSize: 50 }} className="nav-icon"/></Link>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}