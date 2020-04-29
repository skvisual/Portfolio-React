import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './footer';
import '../App.css';


import Navigation from "./navbar"
import avatar from "../assets/images/AboutMePicture.jpg"

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
                        *Insert generic greeting here*
                        {/* Hello! | 안녕하세요! */}
                    </div>

                    <div className="aboutMeText">
                        Here I'll have a bunch of text. <br></br><br></br>

                        Probably something about cool I am and how this is to showcase examples of my work. I'll probably need.<br></br><br></br>

                        blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah  blah blah blah blah blah  blah blah blah blah blah  blah blah blah blah blah  blah blah blah blah blah         
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