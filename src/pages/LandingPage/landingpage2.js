import React from 'react';

// import files
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './landingpage2.css';

// import pictures
import Alamo from '../../img/Texas/Alamo.JPG';
import Chicago from '../../img/Chicago/Streets.JPG';
import Logo from '../../img/Homepage/Logo.png';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <Container fluid>
                    <Row className="center">
                        <div>
                            <h1 className="logo"><img src={Logo} alt="Logo" /></h1>
                            <h3 className="title">CORA CHAN</h3>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <img className="img1" src={Alamo} alt="Travel" />
                                <h2 className="imgText"><Link to="/travel">TRAVEL</Link></h2>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img className="img2" src={Chicago} alt="Design" />
                                <h2 className="imgText"><Link to="/design">DESIGN</Link></h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}