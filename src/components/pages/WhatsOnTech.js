import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import WhatsOnPageNavLinks from '../WhatsOnPageNavLinks';
import '../../App.css';



function WhatsOnTech() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <WhatsOnPageNavLinks />
                <Row>
                    <div className="jumbotron jumbotron-fluid jtron-top whatsontech box">
                        <div className="container">
                            {/* <Col> */}
                                <div className="jtronText">
                                    <p className="jtronHeader">tech</p>
                                    <div className="jtronSubTexBody">
                                    <p>whatsOn utilizes these technologies.</p>
                                        <p>- AJAX</p>
                                        <p>- jQuery</p>
                                        <p>- Bootstrap</p>
                                    </div>
                                </div>
                            {/* </Col> */}
                        </div>
                    </div>
                </Row>
            
                <Footer />
            </div>
        </Container>

    );
}

export default WhatsOnTech;