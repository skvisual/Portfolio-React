import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Footer from '../footer';
import CheersCarousel from '../cheerscarousel';
import WhatsOnCarousel from '../whatsOnCarousel';
import EmpTrackerCarousel from '../emptrackercarousel';
import ReadMeCarousel from "../readmecarousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';




function PortfolioPage() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <Col md="4">
                   <CheersCarousel />
                </Col>
                <Col md="4">
                    <WhatsOnCarousel /> 
                </Col>        
                <Col md="4">
                    <EmpTrackerCarousel />
                </Col>    
                <Col md="4">
                    <ReadMeCarousel />
                </Col>
                <Col md="4">
                    <WhatsOnCarousel />
                </Col>
                <Col md="4">
                    <EmpTrackerCarousel />
                </Col>
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

export default PortfolioPage;