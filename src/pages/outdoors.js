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

export default function Outdoors() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let names = [
        'Iceland/BlueLagoon.JPG',
        'California/Boats.JPG',
        'California/DeathValley.JPG',
        'Arizona/RedRock.JPG',
        'Iceland/Bridge.jpg',
        'California/PalmSprings2.JPG',
        'California/MontereyHotTub.JPG'
    ].map( (name, index) => { 
        return <img className="travel-img" alt="" src={require(`../img/${name}`)} />
    } );

    return (
        <div>
            <Navbar />
            <h1 className="page-title">OUTDOORS</h1>
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