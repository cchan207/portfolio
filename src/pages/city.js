import React, { useEffect } from 'react';

// import icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// import pages
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import '../css-files/app.css';

export default function City() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let names = [
        'Illinois/ChaseTower.JPG',
        'Texas/Odezsa.JPG',
        'NewYork/HighLine.JPG',
        'Texas/KemahBW.JPG',
        'Missouri/CityMuseum.JPG',
        'California/SFMural.JPG',
        'California/Balboa.JPG'
    ].map( (name, index) => { 
        return <img className="travel-img" alt="" src={require(`../img/${name}`)} />
    } );
    
    return (
        <div>
            <Navbar />
            <h1 className="page-title">CITY</h1>
            <div>
                <Container>
                    <div className="travel-container">
                        <Row>
                            <div>
                                <Col sm={12} lg={12}>
                                    { names }
                                </Col>
                            </div>
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