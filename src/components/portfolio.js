import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "./navbar";
import Footer from './footer';
import CheersCarousel from './cheerscarousel';
import WhatsOnCarousel from './whatsOnCarousel';
import EmpTrackerCarousel from './emptrackercarousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';



function Portfolio() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
            <div className="carouselRow1">
                <Row className="carouselRow1">
                    <Col lg="4">
                        <CheersCarousel />
                    </Col>
                    <Col lg="4">
                        <WhatsOnCarousel />
                    </Col>
                    <Col lg="4">
                        <EmpTrackerCarousel />
                    </Col>
                </Row>
            </div>
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

export default Portfolio;