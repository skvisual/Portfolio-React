import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import PageNavLinks from '../PageNavLinks';
// import CheersScroller from '../CheersScroller';
import Col from 'react-bootstrap/Col';

import '../../App.css';



function CheersFeatures() {
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
                                    <p className="jtronHeader">features</p>
                                        <div className="jtronSubTexBody">
                                    <p>- Mobile-first design ensures proper performance across all devices and platforms.<br></br>
                                    - Minimalistic interface keeps your attention where it should be.</p>
                                    <p>- High player capacity allows groups of all sizes to play.</p>
                                    <p>- Customize the game to your liking by adding their own prompts.</p>
                                    <p>- Includes several types of prompt formats to keep the game interesting.</p>
                                    <p>- NO cost. NO additional downloads.</p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <Footer />
            </div>
        </Container>

    );
}

export default CheersFeatures;