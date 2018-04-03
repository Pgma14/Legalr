import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Minisearchbar.css';

export default class Minisearchbar extends Component {

  render () {
    return (
          <div>
                  <form id="minisearchform">
                    <div className="group">
                      <i id="minisearchicon" className="fa fa-search"></i>
                      <input id="minisearchinput" type="text" placeholder="Search" required>
                      </input>
                      <span className="highlight"></span>
                      <span className="bar"></span>
                    </div>
                  </form>
          </div>
    )
  }
}
