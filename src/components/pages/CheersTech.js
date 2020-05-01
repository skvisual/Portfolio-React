import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from "../navbar";
import Row from 'react-bootstrap/Row';
import Footer from '../footer';
import '../../App.css';



function CheersTech() {
    return (
        <Container fluid>
            <div className="background">
                <Row>
                    <Navigation />
                </Row>
                <Row>
                <ul class="nav navlinks">
                        <li class="nav-item">
                            <a class="nav-link navlinktext" href="/components/pages/CheersAbout">About</a>
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

                CHEERS TECH PAGE
                

                {/* <div class="row list"> */}
                {/* <div class="col-4">
                        <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">About</a>
                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Features</a>
                            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Technology</a>
                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">See the code</a>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Cool things!</div>
                            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">.sfsfs..</div>
                            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">..ewffwe.</div>
                            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">..wefe.</div>
                        </div>
                    </div> */}
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

    );
}

export default CheersTech;