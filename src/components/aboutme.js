import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './footer';
import '../App.css';


import Navigation from "./navbar"
import avatar from "../AboutMePicture.jpg"

function AboutMe() {
    return (
        <Container fluid>
            <Row>
                <Navigation />            
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col md="4"></Col>
            </Row>
            <Row>
                <Col md="9">
                    <div className="aboutMeHeader">
                        Hello! | 안녕하세요!
                    </div>

                    <div className="aboutMeText">
                        Welcome! Here's a litte bit about me. <br></br><br></br>

                        My name is Jason Kroening. Here you will find a list of various works done by me. They are here to demonstrate my skill-set and show some of what I am capable of creating.<br></br><br></br>

                        I am more than happy to discuss and answer any questions you may have regarding current or future projects. Please see the contact page for the best ways to open a line of communication.                  
                    </div>                    
                </Col>
                <Col md="3">
                    <div className="avatar">
                        <img src={avatar} alt="headshot" />
                    </div>
                </Col>
            </Row>
           <Footer />
        </Container>
    );
}

export default AboutMe;