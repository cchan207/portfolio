import React from 'react' ;

// import components
import { Document, Page } from 'react-pdf/dist/entry.webpack';

// import files
import ResumePDF from '../../files/Cora_Resume-13Jun2020.pdf';
import './resume.css';

// import pages
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

export default function Resume() {

    return (
        <div>
            <Navbar />
            <div>
                <Document file={ResumePDF} className="container">
                    <Page pageNumber={1} width={1000}/>
                </Document>
            </div>
            <Footer />
        </div>
    );
}