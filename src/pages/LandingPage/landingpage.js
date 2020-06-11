import React, { Component } from 'react';

// import files
import Navbar from '../../components/navbar';
import './landingpage.css';
import '../../index.js';

// import libraries
import {Container, Row, Col} from 'react-bootstrap';

// import pictures
import Sunflowers from '../../img/Sunflowers.JPG';
import SunflowersCrop from '../../img/SunflowersCrop.JPG';

export default function Home() {
    return (
        <div>
            <Navbar />
            {getWindowDimensions() > 650 && (
                <img className="flowerImg" src={SunflowersCrop} alt="Sunflowers" />
            )}
            <img className="portfolioImg" src={Sunflowers} alt="PortfolioImage" />
                <div className="aboutMe">
                    <h2 className="title">Cora Chan</h2>
                    <p className="description">This is my about me section. It is aligned to the bottom of its containing element.</p>
                </div>
        </div>
    )
}