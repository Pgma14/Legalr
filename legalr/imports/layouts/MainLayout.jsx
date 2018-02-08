import React, {Component} from 'react';
import { render, ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AccountsUI from '../accounts-ui.jsx';
import ResolutionsWrapper from '../comps/resolutions/ResolutionsWrapper.jsx';
import MyNavbar from '../comps/navbar/navbar.jsx'
import About from './About.jsx';


const MainLayout = () => {

  return (
    <div className="main-layout">
      <header>
        <MyNavbar />

      <AccountsUI />


      </header>

      <main>
        <Router>
          <Switch>
          <Route exact path="/" component={ResolutionsWrapper} />
          <Route path="/about" component={About} />
          </Switch>
        </Router>
      </main>

    </div>
  );
 }

 export default MainLayout;
