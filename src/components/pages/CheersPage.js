import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import PageNavLinks from '../PageNavLinks';
// import CheersScroller from '../CheersScroller';
import Col from 'react-bootstrap/Col';

import '../../App.css';



function CheersPage() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <PageNavLinks />
                <Row>
                    <div className="jumbotron jumbotron-fluid jtron box">
                        <div className="container">
                            <Col>
                                <div className="jtronText">
                                    <h1 className="display-4">cheers!</h1>
                                    <p>see who's smartest. see who's funniest.</p>
                                    <p>cheers.</p>
                                    <p>cheers! is an online, table-game inspired  multiplayer application.</p>
                                    <p>It utilizes several technologies to deliver a fun, fast-paced experience to enjoy with your favorite people. </p>
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
                <br></br>
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