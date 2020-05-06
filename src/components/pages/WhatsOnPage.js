import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import WhatsOnPageNavLinks from '../WhatsOnPageNavLinks';
import Col from 'react-bootstrap/Col';
import '../../App.css';



function WhatsOnPage() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <WhatsOnPageNavLinks />
                <Row>
                    <div className="jumbotron jumbotron-fluid jtron box">
                        <div className="container">
                            <Col>
                                <div className="jtronText">
                                    <p className="jtronHeader">whatsOn</p>
                                    <p className="jtronSubText">more watching. less searching.</p>
                                    <div className="jtronSubTexBody">
                                    <p>whatsOn makes finding new movies to watch a breeze.</p>
                                    <p>whatsOn allows a user to search a movie title and find which streaming services are currently offering it. Also enables the user to search for a movie currently playing in the theatres.</p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Row>
                
                            
                <Footer />
            </div>
        </Container>

    );
}

export default WhatsOnPage;