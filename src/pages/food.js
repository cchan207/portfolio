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

export default function Food() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    var images = [
        {image : 'Texas/Uchi.JPG', label : 'Uchi', location : 'Houston, Texas'},
        {image : 'NewYork/RH.JPG', label : 'RH Rooftop Restaurant', location : 'New York City, New York'},
        {image : 'Indiana/GardenTable.JPG', label : 'Garden Table', location : 'Indianapolis, Indiana'},
        {image : 'NewYork/Bakery.JPG', label : 'Unknown', location : 'New York City, New York'},
        {image : 'California/MontereyDining.JPG', label : 'Unknown', location : 'Monterey, California'},
        {image : 'Indiana/Bluebeard.JPG', label : 'Bluebeard', location : 'Indianapolis, Indiana'}
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
            <h1 className="page-title">FOOD</h1>
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