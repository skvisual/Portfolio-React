import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import CheersPageNavLinks from '../CheersPageNavLinks';
import Col from 'react-bootstrap/Col';

import '../../App.css';



function CheersPage() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <CheersPageNavLinks />
                <Row>
                    <div className="jumbotron jumbotron-fluid cheersjtron jtron-center box">
                        <div className="container">
                            <Col>
                                <div className="jtronText">
                                    <p className="jtronHeader">cheers!</p>
                                    <p className="jtronSubText">see who's smartest. see who's funniest.</p><p className="jtronSubText2">cheers.</p>
                                    <div className="jtronSubTexBody">
                                    <p>cheers! is an online, table-game inspired  multiplayer application.</p>
                                    <p>It utilizes several technologies to deliver a fun, fast-paced experience to enjoy with your favorite people. </p>
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

export default CheersPage;