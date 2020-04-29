import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "./navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './footer';
import '../App.css';



function Portfolio() {
    return (
        <Container fluid>
            <Row>
                <Navigation />
            </Row>
         Portfolio contents here
            <Footer />
        </Container>
    );
}

export default Portfolio;