import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx'
import App from './app.js'




FlowRouter.route('/a', {
    action() {
      mount(MainLayout, {
          content: (<App />)
      })
    }
});
