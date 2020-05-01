import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';



function WhatsOnCarousel() {

    const location = useLocation();


    return (
        <Container fluid>
                <Col className="carouselCol">
                    <Carousel className="carouselImage box">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carouselImage"
                                src="https://i.ibb.co/JpvjxgM/whatsonhomescreen.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carouselImage"
                                src="https://i.ibb.co/JpvjxgM/whatsonhomescreen.png"
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carouselImage"
                                src="https://i.ibb.co/JpvjxgM/whatsonhomescreen.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <div class="carouselButton">
                    <Row>
                    <Link to="/components/pages/WhatsOnPage" className={location.pathname === "/components/pages/WhatsOnPage" ? "nav-link active" : "nav-link"} className="portfoliobtn btn m-auto border">whatsOn</Link>
                    </Row>
                </div>
        </Container>
    );
}

export default WhatsOnCarousel;