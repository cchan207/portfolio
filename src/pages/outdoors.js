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
import { versionMajorMinor } from 'typescript';

export default function Outdoors() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    var images = [
        {image : 'Iceland/BlueLagoon.JPG', caption : 'Blue Lagoon, Iceland'},
        {image : 'California/Boats.JPG', caption : 'San Diego, California'},
        {image : 'California/DeathValley.JPG', caption : 'Death Valley, California'},
        {image : 'Arizona/RedRock.JPG', caption : 'Sedona, Arizona'},
        {image : 'Iceland/Bridge.jpg', caption : 'Hraunfossar, Iceland'},
        {image : 'California/PalmSprings2.JPG', caption : 'Palm Springs, California'},
        {image : 'California/MontereyHotTub.JPG', caption : 'Monterey, California'}
    ];

    function getPicture(item) {
        return (
            <div>
                <img className="travel-img" alt="" src={require(`../img/${item.image}`)}></img>
                <text>{item.caption}</text>
            </div>
        );
    }

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
                                { images.map(getPicture) }
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