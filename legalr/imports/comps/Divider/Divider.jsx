import React, { Component } from 'react';

import './Divider.css';

export default class Divider extends Component {
  render () {
    return (
      <div className="container-fluid section-instructions" id="instructions">
        <div className="row_replace">
          <div className="col-md-12 col-sm-12 col-xs-12 instructions text-center">
            <h1>Select a state</h1>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 instructions text-center">
            <a className="btn d-xl-none d-lg-none d-md-none d-sm-none data-toggle">
              <span>
                <i className="fa fa-chevron-down fa-lg"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
