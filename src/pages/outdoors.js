import React, { useEffect } from 'react';

// import icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

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
        {image : 'Iceland/BlueLagoon.JPG', label : 'Blue Lagoon', location : 'Grindavík, Iceland'},
        {image : 'California/Boats.JPG', label : 'Unknown', location : 'San Diego, California'},
        {image : 'California/DeathValley.JPG', label : 'Mesquite Flat Sand Dunes', location : 'Death Valley, California'},
        {image : 'Arizona/RedRock.JPG', label : 'Red Rock', location : 'Sedona, Arizona'},
        {image : 'Iceland/Bridge.jpg', label : 'Hraunfossar', location : 'Borgarfjörður, Iceland'},
        {image : 'California/PalmSprings2.JPG', label : 'Aerial Tramway', location : 'Palm Springs, California'},
        {image : 'California/MontereyHotTub.JPG', label : 'Unknown', location : 'Monterey, California'}
    ];

    function getPicture(item) {
        return (
            <div>
                <img className="travel-img" alt="" src={require(`../img/${item.image}`)}></img>
                <div className="travel-caption">
                    <ArrowDropUpIcon style={{ fontSize: 40 }}/>
                    <text style={{ fontWeight: 'bold' }}>{item.label} </text>
                    <text>in {item.location}</text>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <h1 className="page-title">OUTDOORS</h1>
            <div>
                <Container className="travel-container">
                    <div>
                        <Row>
                            <div>
                            <Col sm={12} lg={12}>
                                { images.map(getPicture) }
                            </Col>
                            </div>
                        </Row>
                    </div>
                    <Row className="arrows">
                            <div className="left-nav-icon">
                                <Link to="/"><NavigateBeforeIcon style={{ fontSize: 50 }} className="nav-icon"/>HOME</Link>
                            </div>
                            <div>
                                <Link to="/city">CITY<NavigateNextIcon style={{ fontSize: 50 }} className="nav-icon"/></Link>
                            </div>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}