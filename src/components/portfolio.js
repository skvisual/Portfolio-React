import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "./navbar";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Footer from './footer';
import Carousel from './carousel';
import Row from 'react-bootstrap/Row';
import '../App.css';



function Portfolio() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                    <Carousel />
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
                    <br></br>   
                    <br></br>
                    <br></br>                                
                    <Footer />                
            </div>

        </Container>
        // <Container fluid>
        //     <Row>
        //         <Navigation />
        //     </Row>
        //         <Container fluid className="cardContainer">
        //             <Row>
                        // <Card className="cardItem" style={{ height: '10rem'}}>
                        //     <Card.Img variant="top" src="https://i.ibb.co/n6N5mDz/cheers-SS1.png" />
                        //     <Card.Body>
                        //     <Card.Title className="cardTitle">cheers!</Card.Title>
                        //         <Card.Text>
                        //             Cheers is a fast-paced, real-time, online multiplayer game that can be played by 2 or more people.<br></br>Utilizes socket.io to handle multiple client connections.
                        //         </Card.Text>
                        //     <Button variant="primary">Learn More</Button>
                        //     </Card.Body>
                        // </Card>
        //                 <Card className="cardItem" style={{ width: '18rem' }}>
        //                     <Card.Img variant="top" src="https://i.ibb.co/PWCRmrf/movie-search.png" />
        //                     <Card.Body>
        //                     <Card.Title className="cardTitle">whatsOn</Card.Title>
        //                         <Card.Text>
        //                             Search a movie title and see what streaming services it is offered on. <br></br>Also able to search current movie theater showtimes based on location
        //                         </Card.Text>
        //                     <Button variant="primary">Learn More</Button>
        //                     </Card.Body>
        //                 </Card>
        //                 <Card className="cardItem" style={{ width: '18rem' }}>
        //                     <Card.Img variant="top" src="https://i.ibb.co/VvdF5JF/employeetracker-SS1.png" />
        //                     <Card.Body>
        //                     <Card.Title className="cardTitle">Employee Tracker</Card.Title>
        //                         <Card.Text>
        //                            A simple CLI application to track company employees.
        //                         </Card.Text>
        //                     <Button variant="primary">Learn More</Button>
        //                     </Card.Body>
        //                 </Card>

        //             </Row>
        //         </Container>                          
        //     <Footer />
        // </Container>
    );
}

export default Portfolio;