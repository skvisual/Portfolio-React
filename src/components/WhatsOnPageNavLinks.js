import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../App.css';



function WhatsOnPageNavLinks() {
    return (
        <Container fluid>
               <Row>
                    <ul class="nav navlinks">
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/Portfolio-React/#/components/pages/WhatsOnFeatures">features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/Portfolio-React/#/components/pages/WhatsOnTech">tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/Portfolio-React/#/components/pages/WhatsOnCode">code</a>
                        </li>
                    </ul>
                    </Row>
        </Container>

    );
}

export default WhatsOnPageNavLinks;