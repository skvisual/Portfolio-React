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
                    <div className="jumbotron jumbotron-fluid jtronFeatures box">
                        <div className="container">
                            {/* <Col> */}
                                <div className="jtronText">
                                    <p className="jtronHeader">tech</p>
                                    <div className="jtronSubTexBody">
                                    <p>whatsOn utilizes these technologies.</p>
                                            {/* <p>- Node.js</p>
                                            <p>- Express</p>
                                            <p>- jQuery</p> */}
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

export default WhatsOnTech;