import React from 'react';
import { render, ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
// import sample from './sample';


Meteor.startup(() => {
  render(
  <Router>
    <Switch>
    <Route exact path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('render-target'));
});
