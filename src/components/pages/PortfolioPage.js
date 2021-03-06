import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Footer from '../footer';
import SquigglepigCarousel from '../SquigglepigCarousel';
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
                <div className="carouseldiv">
                    <Row className="carouseldiv">
                        <Navigation />
                    </Row>

                    <Row className="carouseldiv">    
                        <Col md="5">
                            <SquigglepigCarousel />
                        </Col>
                        <Col md="5">
                            <CheersCarousel />
                        </Col>
                    </Row>
                    <Row className="carouseldiv">
                        <Col md="5">
                            <WhatsOnCarousel />
                        </Col>
                        <Col md="5">
                            <EmpTrackerCarousel />
                        </Col>
                    </Row>
                    <Row className="carouseldiv">
                    <Col md="5">
                            <WhatsOnCarousel />
                        </Col>                        
                        <Col md="5">
                            <ReadMeCarousel />
                        </Col>
                    </Row>
                                        
                </div>
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