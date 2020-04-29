import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


function Navigation() {

    const location = useLocation();

    return (
        <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">sKv | Jason Kroening</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );

}

export default Navigation;