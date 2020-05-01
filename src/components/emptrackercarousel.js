import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';



function EmpTrackerCarousel() {

    const location = useLocation();
    function renderPage(){
        var x = location.pathname === "/components/pages/EmpTrackerPage" ? "nav-link active" : "nav-link"
        x += " portfoliobtn btn m-auto border";
        return x;
    }



    return (
        <Container fluid>
            <Col className="carouselCol">
                <Carousel className="carouselImage box">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImage"
                            src="https://i.ibb.co/stNLttc/employeetracker-SS2v2.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImage"
                            src="https://i.ibb.co/stNLttc/employeetracker-SS2v2.png"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImage"
                            src="https://i.ibb.co/stNLttc/employeetracker-SS2v2.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>
            <div class="carouselButton">
                <Row>
                    <Link to="/components/pages/EmpTrackerPage" className={renderPage()}>
                        Employee Tracker
                    </Link>                    
                </Row>
            </div>
        </Container>
    );
}

export default EmpTrackerCarousel;