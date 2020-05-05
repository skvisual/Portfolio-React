import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import AboutMePage from "./components/pages/AboutMePage";
import PortfolioPage from "./components/pages/PortfolioPage";
import Contact from "./components/contact";
import CheersPage from "./components/pages/CheersPage";
import WhatsOnPage from './components/pages/WhatsOnPage';
import EmpTrackerPage from './components/pages/EmpTrackerPage';
import ReadmePage from './components/pages/ReadmePage';
import CheersAbout from './components/pages/CheersAbout';
import CheersFeatures from './components/pages/CheersFeatures';
import CheersTech from './components/pages/CheersTech';
import CheersCode from './components/pages/CheersCode';
import './App.css' ;

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
          <Route exact path="/components/pages/CheersAbout" component={CheersAbout} />
          <Route exact path="/components/pages/CheersFeatures" component={CheersFeatures} />
          <Route exact path="/components/pages/CheersTech" component={CheersTech} />
          <Route exact path="/components/pages/CheersCode" component={CheersCode} />
        </div>
      </Router>

    </Container>

  );
}

export default App;

