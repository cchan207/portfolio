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

export default function City() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    var images = [
        {image : 'Illinois/ChaseTower.JPG', label : 'Chase Tower', location : 'Chicago, Illinois'},
        {image : 'Texas/Odezsa.JPG', label : 'Odezsa Concert', location : 'Houston, Texas'},
        {image : 'NewYork/HighLine.JPG', label : 'Highline', location : 'New York City, New York'},
        {image : 'Texas/KemahBW.JPG', label : 'Kemah Boardwalk', location : 'Houston, Texas'},
        {image : 'Missouri/CityMuseum.JPG', label : 'City Museum', location : 'St. Louis, Missouri'},
        {image : 'California/SFMural.JPG', label : 'Mural', location : 'San Francisco, California'},
        {image : 'California/Balboa.JPG', label : 'Balboa Park', location : 'San Diego, California'}
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
            <h1 className="page-title">CITY</h1>
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