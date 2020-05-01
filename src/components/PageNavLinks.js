import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../App.css';



function PageNavLinks() {
    return (
        <Container fluid>
            <Row>
                <ul class="nav navlinks">
                        <li class="nav-item">
                            <a class="nav-link navlinktext navabout" href="/components/pages/CheersAbout">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/components/pages/CheersFeatures">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/components/pages/CheersTech">Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/components/pages/CheersCode">Code</a>
                        </li>
                    </ul>
            </Row>
        </Container>

    );
}

export default PageNavLinks;