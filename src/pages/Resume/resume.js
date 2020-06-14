import React from 'react' ;

// import components
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { Container } from 'react-bootstrap';

// import files
import ResumePDF from '../../files/Resume.pdf';
import { useWindowDimensions } from '../../window';
import './resume.css';

// import pages
import Navbar from '../../components/navbar/navbar';

export default function Resume() {
    let { wWidth } = useWindowDimensions();

    return (
        <div>
            <Navbar />
            <div>
                <Document file={ResumePDF} className="container">
                    <Page pageNumber={1} width={1000}/>
                </Document>
            </div>
        </div>
    );
}