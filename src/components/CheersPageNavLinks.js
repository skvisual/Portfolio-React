import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../App.css';



function CheersPageNavLinks() {
    return (
        <Container fluid>
               <Row>
                    <ul className="nav navlinks">
                        <li className="nav-item">
                            <a className="nav-link navlinktext" href="/Portfolio-React/#/components/pages/CheersFeatures">features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navlinktext" href="/Portfolio-React/#/components/pages/CheersTech">tech</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navlinktext" href="/Portfolio-React/#/components/pages/CheersCode">code</a>
                        </li>
                    </ul>
                    </Row>
        </Container>

    );
}

export default CheersPageNavLinks;