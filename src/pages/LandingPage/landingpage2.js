import React from 'react';

// import files
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useWindowDimensions } from '../../window.js';
import './landingpage2.css';

// import pictures
import Alamo from '../../img/Texas/Alamo.JPG';
import Chicago from '../../img/Chicago/Streets.JPG';
import Logo from '../../img/Homepage/Logo.png';

export default function Home() {

    let {width} = useWindowDimensions();

    return (
        <div>
            <Navbar />
            <div>
                <Container>
                    {/* For desktop */}
                    {width > 1000 && (
                    <Row className="center">
                        <div>
                            <h1 className="logo"><img src={Logo} alt="Logo" /></h1>
                            <h3 className="title">CORA CHAN</h3>
                        </div>
                    </Row>
                    )}
                    <div className="container">
                        <Row>
                            <Col sm={12} lg>
                                <div>
                                    <img className="img" src={Alamo} alt="Travel" />
                                    <h2 className="imgText"><Link to="/travel">TRAVEL</Link></h2>
                                </div>
                            </Col>
                            <Col sm={12} lg>
                                <div>
                                    <img className="img" src={Chicago} alt="Design" />
                                    <h2 className="imgText"><Link to="/design">DESIGN</Link></h2>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}