import React, { useEffect } from 'react';

// import files
import Navbar from '../components/navbar/navbar-home';
import Footer from '../components/footer/footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useWindowDimensions } from '../window.js';
import '../css-files/app.css';

// import pictures
import Alamo from '../img/Texas/Alamo.JPG';
import Chicago from '../img/Illinois/Streets.JPG';
import Logo from '../img/Homepage/Logo.png';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                            {/*<h1 className="logo"><img src={Logo} alt="Logo" /></h1>*/}
                            <h3 className="title">CORA CHAN</h3>
                        </div>
                    </Row>
                    )}
                    <div className="container">
                        <Row>
                            <Col sm={12} lg>
                                <div>
                                <Link to="/travel">
                                    <img className="img" src={Alamo} alt="Travel" />
                                    <h2 className="imgText"><Link to="/travel">TRAVEL</Link></h2>
                                </Link>
                                </div>
                            </Col>
                            <Col sm={12} lg>
                                <div>
                                <Link to="/design">
                                    <img className="img" src={Chicago} alt="Design" />
                                    <h2 className="imgText"><Link to="/design">DESIGN</Link></h2>
                                </Link>
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