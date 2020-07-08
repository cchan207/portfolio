import React, { useEffect } from 'react';

// import pages
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Template from '../files/index.js';

import '../css-files/app.css';

export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar />
            <h1 className="page-title">DESIGN</h1>
            <Template />
            <Footer />
        </div>
    )
}