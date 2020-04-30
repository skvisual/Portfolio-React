import React from "react";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from './slider';
import '../App.css';



function portfolioCarousel() {
    return (
        <Container fluid>
                <Col lg="6" className="carouselCol">
                    <Carousel className="carouselImage box">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carouselImage"
                                src="https://i.ibb.co/Lntc36S/cheers-SS1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carouselImage"
                                src="https://i.ibb.co/Lntc36S/cheers-SS1.png"
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carouselImage"
                                src="https://i.ibb.co/Lntc36S/cheers-SS1.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
        </Container>
    );
}

export default portfolioCarousel;