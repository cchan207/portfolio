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
import Uchi from '../img/Texas/Uchi.JPG';
import Uchi2 from '../img/Texas/Uchi2.JPG';
import RH from '../img/NewYork/RH.JPG';
import MontereyDining from '../img/California/MontereyDining.JPG';
import Bakery from '../img/NewYork/Bakery.JPG';
import Bluebeard from '../img/Indiana/Bluebeard.JPG';
import GardenTable from '../img/Indiana/GardenTable.JPG';

import '../css-files/app.css';

export default function Food() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Navbar />
            <h1 className="page-title">FOOD</h1>
            <div>
                <Container>
                    <div className="travel-container">
                        <Row>
                            <Col sm={12} lg={12}><img className="travel-img" src={Uchi} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={RH} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={GardenTable} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Bakery} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={MontereyDining} alt="" /></Col>
                            <Col sm={12} lg={12}><img className="travel-img" src={Bluebeard} alt="" /></Col>
                        </Row>
                        <Row className="arrows">
                            <div className="left-nav-icon">
                                <Link to="/city"><NavigateBeforeIcon style={{ fontSize: 50 }} className="nav-icon"/>CITY</Link>
                            </div>
                            <div >
                                <Link to="/" style={{ display: 'none' }}><NavigateNextIcon style={{ fontSize: 50 }} className="nav-icon"/></Link>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}