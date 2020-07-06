import React from 'react';

// import pages
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Template from '../files/index.js';

import '../css-files/app.css';

export default function Travel() {
    return (
        <div>
            <Navbar />
            <h1 className="page-title">TRAVEL</h1>
            <Template />
            <Footer />
        </div>
    )
}