import React from 'react';

// import files
import Navbar from '../../components/navbar';
import './landingpage.css';
import { useWindowDimensions } from '../../window.js';

// import libraries
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListGroup from 'react-bootstrap/ListGroup';

// import pictures
import Sunflowers from '../../img/Sunflowers.JPG';
import SunflowersCrop from '../../img/SunflowersCrop.JPG';
import SunflowersBlock from '../../img/SunflowersBlock.png';

export default function Home() {

    let {width} = useWindowDimensions();
    
    return (
        <div>
            <Navbar />
            <Container fluid>
                    <Row>
                        <Col lg={4} className="firstColumn">
                            <div>
                                <h1 className="title">CORA CHAN</h1>
                                <h3 className="subtitle">Software Development Engineer Intern at Amazon</h3>
                            </div>
  
                            {/* For mobile */}
                            {width < 1000 && (
                                <div>
                                    <img className="landscapeImg" src={SunflowersBlock} alt="LandscapeImage" />
                                </div>
                            )}
                            <hr />
                            <div className="p">
                                Hi, welcome to my website! I'm an incoming senior at Purdue University looking for full-time opportunities. 
                                I created this site to learn some front-end development using ReactJS and keep a travel photo journal. My goal is 
                                to visit all 50 states and at least one country on every continent!
                            </div>
                            
                            {/* For desktop */}
                            {width >= 1000 && (
                                <ListGroup horizontal className="linkGroup">
                                <ListItem button key={'Projects'}>
                                    <Link to="/design">
                                        <ListItemText disableTypography style={{ textAlign: 'center' }}>Projects</ListItemText>
                                    </Link>
                                </ListItem>
                                <ListItem button key={'Travel'}>
                                    <Link to="/travel">
                                        <ListItemText disableTypography className="item">Travel</ListItemText>
                                    </Link>
                                </ListItem>
                                </ListGroup>
                            )}
                        </Col>
                        <Col lg={4} className="secondColumn">
                            <img className="portfolioImg" src={Sunflowers} alt="PortfolioImage" />
                        </Col>
                        <Col lg={2} className="hiddenColumn">
                            <header className="boxLg"></header>
                            <img className="flowerImg" src={SunflowersCrop} alt="Sunflowers" />
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}