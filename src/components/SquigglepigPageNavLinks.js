import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../App.css';



function SquigglepigNavLinks() {
    return (
        <Container fluid>
               <Row>
                    <ul class="nav navlinks">
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/Portfolio-React/#/components/pages/CheersFeatures">features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/Portfolio-React/#/components/pages/CheersTech">tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/Portfolio-React/#/components/pages/CheersCode">code</a>
                        </li>
                    </ul>
                    </Row>
        </Container>

    );
}

export default SquigglepigNavLinks;