import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import AboutMe from "./components/aboutme";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import './App.css';

function App() {
  return (
    <Container fluid>
      <Router>
        <div>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>

    </Container>

  );
}

export default App;