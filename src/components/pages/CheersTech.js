import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import PageNavLinks from '../PageNavLinks';
// import CheersScroller from '../CheersScroller';
import Col from 'react-bootstrap/Col';

import '../../App.css';



function CheersTech() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <PageNavLinks />
                <Row>
                    <div className="jumbotron jumbotron-fluid jtronFeatures box">
                        <div className="container">
                            <Col>
                                <div className="jtronText">
                                    <p className="jtronHeader">tech</p>
                                        <div className="jtronSubTexBody">
                                            <p>cheers! utilizes these technologies.</p>
                                            <p>- Node.js</p>
                                            <p>- Express</p>
                                            <p>- Socket.io</p>
                                            <p>- Sound.js</p>
                                            <p>- MYSQL</p>
                                            <p>- Sequelize</p>
                                            <p>- jQuery</p>
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

export default CheersTech;