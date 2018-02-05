import React from 'react';
import { render, ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/MainLayout.jsx';
import About from './layouts/About.jsx';

//import ResolutionsWrapper from './components/resolutions/ResolutionsWrapper.jsx';
// import sample from './sample';


Meteor.startup(() => {
  render(
  <Router>
    <Switch>
    <Route path="/" component={MainLayout} />
    </Switch>
  </Router>,
  document.getElementById('render-target'));
});
