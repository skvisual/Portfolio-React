import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


function CheersScroller() {
    return (
        <Container fluid>
            <Row>
                <div className="scrolling-wrapper">
                    <div className="card"><h2>Card1</h2></div>
                    <div className="card"><h2>Card2</h2></div>
                    <div className="card"><h2>Card3</h2></div>
                    <div className="card"><h2>CardX</h2></div>
                    <div className="card"><h2>Card4</h2></div>
                    <div className="card"><h2>Card5</h2></div>
                    <div className="card"><h2>Card6</h2></div>
                    <div className="card"><h2>Card7</h2></div>
                    <div className="card"><h2>Card8</h2></div>
                </div>
            </Row>        
        </Container>
    );

}

export default CheersScroller;























