import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


function Navigation() {

    const location = useLocation();

    return (
        <Container fluid>
            <Navbar className="navShadow" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="navFont">sKv</Navbar.Brand><Navbar.Brand className="navFont2">|</Navbar.Brand><Navbar.Brand className="navFont3">JASON KROENING</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>home</Link>
                        <Link to="/components/pages/PortfolioPage" className={location.pathname === "/components/pages/PortfolioPage" ? "nav-link active" : "nav-link"}>portfolio</Link>
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );

}

export default Navigation;