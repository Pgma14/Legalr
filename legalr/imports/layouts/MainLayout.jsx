import React, {Component} from 'react';
import { render, ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import AccountsUI from '../accounts-ui.jsx';
import ResolutionsWrapper from '../comps/resolutions/ResolutionsWrapper.jsx';
import MyNavbar from '../comps/navbar/navbar.jsx'
import About from './About.jsx';
import DemoCarousel from '../comps/carousel/carouselLayout.jsx';
import Footer from '../comps/Footer/Footer.jsx';
import Divider from '../comps/Divider/Divider.jsx';
import TrackImpact from '../comps/TrackImpact/TrackImpact.jsx';
import LawResults from '../comps/LawResults/LawResults.jsx';
import IndividualLawPage from '../comps/IndividualLawPage/IndividualLawPage.jsx';
import Home from './Home.jsx';
import Demo from './Demo.jsx';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>
        <MyNavbar />
      </header>

      <main>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/results" component={LawResults} />
          <Route exact path="/lawresult" component={IndividualLawPage} />
          <Route exact path="/resolutions" component={ResolutionsWrapper} />
          <Route exact path="/trackimpact" component={TrackImpact} />
          <Route path="/about" component={About} />
          </Switch>
        </Router>
      </main>

      <footer>
      <Footer />
      </footer>

    </div>
  );
 }

 export default MainLayout;
