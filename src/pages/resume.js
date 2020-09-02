import React, { useEffect } from 'react';

// import components
import { Document, Page } from 'react-pdf/dist/entry.webpack';

// import files
import ResumePDF from '../files/Cora_Resume-2Aug2020.pdf';

import '../css-files/app.css';

// import pages
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

export default function Resume() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar />
            <div>
                <Document file={ResumePDF} className="resume-container">
                    <Page pageNumber={1} width={1000}/>
                </Document>
            </div>
            <Footer />
        </div>
    );
}