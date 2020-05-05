import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import AboutMePage from "./components/pages/AboutMePage";
import PortfolioPage from "./components/pages/PortfolioPage";
import Contact from "./components/contact";
import CheersPage from "./components/pages/CheersPage";
import EmpTrackerPage from './components/pages/EmpTrackerPage';
import ReadmePage from './components/pages/ReadmePage';
import CheersAbout from './components/pages/CheersAbout';
import CheersFeatures from './components/pages/CheersFeatures';
import CheersTech from './components/pages/CheersTech';
import CheersCode from './components/pages/CheersCode';
import WhatsOnPage from './components/pages/WhatsOnPage';
import WhatsOnFeatures from './components/pages/WhatsOnFeatures';
import WhatsOnTech from './components/pages/WhatsOnTech';
import WhatsOnCode from './components/pages/WhatsOnCode';
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
          <Route exact path="/components/pages/CheersAbout" component={CheersAbout} />
          <Route exact path="/components/pages/CheersFeatures" component={CheersFeatures} />
          <Route exact path="/components/pages/CheersTech" component={CheersTech} />
          <Route exact path="/components/pages/CheersCode" component={CheersCode} />

          <Route exact path="/components/pages/WhatsOnPage" component={WhatsOnPage} />
          <Route exact path="/components/pages/WhatsOnFeatures" component={WhatsOnFeatures} />
          <Route exact path="/components/pages/WhatsOnTech" component={WhatsOnTech} />
          <Route exact path="/components/pages/WhatsOnCode" component={WhatsOnCode} />

          <Route exact path="/components/pages/EmpTrackerPage" component={EmpTrackerPage} />
          <Route exact path="/components/pages/ReadmePage" component={ReadmePage} />



        </div>
      </Router>

    </Container>

  );
}

export default App;

