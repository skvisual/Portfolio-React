import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import CheersPageNavLinks from '../CheersPageNavLinks';
import Col from 'react-bootstrap/Col';

import '../../App.css';



function SquigglepigPage() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <CheersPageNavLinks />
                <Row>
                    <div className="jumbotron jumbotron-fluid squigglepigjtron jtron-center box">
                        <div className="container">
                            <Col>
                                <div className="jtronText">
                                    <p className="jtronHeader-squigglepig">squigglepig</p>
                                    <p className="jtronSubText-squigglepig">Draw squiggles. Get giggles.</p>
                                    <div className="jtronSubTexBody">
                                    <p>squigglepig is an online-multiplayer game that combines drawing and caption creation to deliver a fun, hands-on experience for all ages.</p>
                                    <p>Get your friends together to experience this technology rich application</p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Row>
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

export default SquigglepigPage;