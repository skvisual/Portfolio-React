import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './footer';
import Navigation from "./navbar"
import avatar from "../assets/images/AboutMePicture.jpg"
import '../App.css';


function AboutMe() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
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
                            <img src={avatar} alt="headshot" className="box" />
                        </div>
                    </Col>

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

                <Footer />
            </div>

        </Container>
        // <Container fluid className="background">
        //     <Navigation /> 

        //     <Row>
        //         <Col md="9">
        //             <div className="aboutMeHeader">
        //                 *Insert generic greeting here*
        //                 {/* Hello! | 안녕하세요! */}
        //             </div>

        //             <div className="aboutMeText">
        //                 Here I'll have a bunch of text. <br></br><br></br>

        //                 Probably something about cool I am and how this is to showcase examples of my work. I'll probably need.<br></br><br></br>

        //                 blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah  blah blah blah blah blah  blah blah blah blah blah  blah blah blah blah blah  blah blah blah blah blah         
        //             </div>                    
        //         </Col>
        //         <Col md="3">
        //             <div className="avatar">
        //                 <img src={avatar} alt="headshot" />
        //             </div>
        //         </Col>
           
        //     </Row>
        //     {/* <Row>
        //         <Col md="6"></Col>
        //     </Row> */}
        //    <Footer />
        // </Container>
    );
}

export default AboutMe;