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
                    <div className="jumbotron jumbotron-fluid jtronFeatures box">
                        <div className="container">
                            {/* <Col> */}
                                <div className="jtronText">
                                    <p className="jtronHeader">features</p>
                                    <div className="jtronSubTexBody">
                                        {/* <p>- Mobile first design ensures proper performance across all devices and platforms.</p>
                                        <p>- Progressive Web Application</p>
                                        <p>- Customize the game to your liking by adding their own prompts.</p>
                                        <p>- NO cost. NO additional downloads.</p> */}
                                    </div>
                                </div>
                            {/* </Col> */}
                        </div>
                    </div>
                </Row>
                <br></br>
                <br></br>
                <Footer />
            </div>
        </Container>

    );
}

export default WhatsOnFeatures;