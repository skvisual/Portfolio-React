import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import PageNavLinks from '../PageNavLinks';
import CheersScroller from '../CheersScroller';
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
                            <h1 className="display-2 infoheader">cheers!</h1>
                            <p className="infosubheader">see who's smartest. see who's funniest.</p>
                            <p className="infosubheader">cheers.</p>

                        </div>
                            <Col sm="6">
                            <p className="infosubheader subheadertext">cheers! is an online, table-game inspired multiplayer application. It utilizes several technologies; And delivers a fun, fast-paced experience to enjoy with your favorite people. </p>
                            <br></br>
                                
                            </Col>
                            

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