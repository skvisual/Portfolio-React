import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import CheersPageNavLinks from '../CheersPageNavLinks';
import Col from 'react-bootstrap/Col';

import '../../App.css';



function CheersCode() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <CheersPageNavLinks />
                <Row>
                    <div className="jumbotron jumbotron-fluid jtronCode box">
                        <div className="container">
                            <Col>
                                <div className="jtronCodeIcons">
                                        <div className="jtronSubTexBody">
                                            <p>see the code.</p>
                                            <a href="https://github.com/maxwellhankner/drinking-game" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-4x pageicon"></i></a><br></br>
                                            <div className="codeIcons">
                                                <p> play the game.</p>
                                                <a href="https://safe-cove-74547.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i class="fas fa-gamepad fa-4x pageicon"></i></a>
                                            </div>

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

export default CheersCode;