import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import AboutMePage from "./components/pages/AboutMePage";
import PortfolioPage from "./components/pages/PortfolioPage";
import Contact from "./components/contact";
import CheersPage from "./components/pages/CheersPage";
import WhatsOnPage from './components/pages/WhatsOnPage';
import EmpTrackerPage from './components/pages/EmpTrackerPage';
import ReadmePage from './components/pages/ReadmePage';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Router>
        <div>
          <Route exact path="/" component={AboutMePage} />
          <Route exact path="/components/pages/PortfolioPage" component={PortfolioPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/components/pages/CheersPage" component={CheersPage} />
          <Route exact path="/components/pages/WhatsOnPage" component={WhatsOnPage} />
          <Route exact path="/components/pages/EmpTrackerPage" component={EmpTrackerPage} />
          <Route exact path="/components/pages/ReadmePage" component={ReadmePage} />

        </div>
      </Router>

    </Container>

  );
}

export default App;