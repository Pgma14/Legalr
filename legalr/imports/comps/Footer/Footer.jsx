import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 footer">
              <h1 id="copyrightleft">© 2017-2018 Legalr</h1>
              <h1 id="disclaimerright"><a data-toggle="collapse" href="#disclaimer_section">Disclaimer</a></h1>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
