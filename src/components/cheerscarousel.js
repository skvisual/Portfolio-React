import React from "react";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { Link, useLocation } from "react-router-dom";




function CheersCarousel() {

    const location = useLocation();

    function renderPage() {
        var x = location.pathname === "/components/pages/readmepage" ? "nav-link active" : "nav-link"
        x += " portfoliobtn btn m-auto border"
        return x;
    }

    return (
        
        <Container fluid>
            <Col className="carouselCol">
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
                            src="https://i.ibb.co/64m1KC2/cheers-SS3.png"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImage"
                            src="https://i.ibb.co/fkJ93Bg/cheers-SS4.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>

            
            <div class="carouselButton">
                <Row>
                    <Link to="/components/pages/cheerspage" className={renderPage()}>
                        cheers!
                    </Link>                
                </Row>
            </div>
        </Container>
    );
}

export default CheersCarousel;