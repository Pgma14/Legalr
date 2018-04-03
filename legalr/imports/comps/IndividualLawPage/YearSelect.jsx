import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import CheckBox from './CheckBox.jsx';

import './YearSelect.css';

export default class YearSelect extends Component {

  render () {
    return (
      <label id="yearsection">
          <h6 id="SelectYearH6"> Select Year </h6>

            <div id="yearboxsection">

              <div>
              <label id="yearcheckbox" className="material-checkbox">
                  <input id="checkboxinput" type="checkbox" />
                  <span id="checkboxspan">2018</span>
              </label>
              </div>

              <div>
                <label id="yearcheckbox" className="material-checkbox">
                    <input id="checkboxinput" type="checkbox" />
                    <span id="checkboxspan">2017</span>
                </label>
              </div>

              <div>
                <label id="yearcheckbox" className="material-checkbox">
                    <input id="checkboxinput" type="checkbox" />
                    <span id="checkboxspan">2016</span>
                </label>
              </div>
            </div>
      </label>
    )
  }
}
