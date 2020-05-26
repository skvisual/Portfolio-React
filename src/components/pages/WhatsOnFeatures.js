import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import WhatsOnPageNavLinks from '../WhatsOnPageNavLinks';
import '../../App.css';



function WhatsOnFeatures() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <WhatsOnPageNavLinks />
                <Row>
                    <div className="jumbotron jumbotron-fluid jtron-top whatsonfeatures box">
                        <div className="container">
                            {/* <Col> */}
                                <div className="jtronText">
                                    <p className="jtronHeader">features</p>
                                    <div className="jtronSubTexBody">
                                        <p>- Responsive design lets the user access the application from anywhere.</p>
                                        <p>- Carousels hightlight a random selection of films based upon your preferences.</p>
                                        <p>- Search theater listings by zip code.</p>
                                        <p>- User preferences stored to ease usability.</p>
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

export default WhatsOnFeatures;