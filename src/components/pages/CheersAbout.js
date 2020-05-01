import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import CheersScroller from '../CheersScroller'
import '../../App.css';
import PageNavLinks from "../PageNavLinks";



function CheersAbout() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <PageNavLinks />
                <CheersScroller />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Footer />
            </div>
        </Container>

    );
}

export default CheersAbout;