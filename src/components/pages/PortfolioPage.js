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
                <div className="carouselRow1">
                    <Row>
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
                <div className="carouselRow1">
                    <Row>
                        <Col lg="4">
                            <ReadMeCarousel />
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

export default PortfolioPage;