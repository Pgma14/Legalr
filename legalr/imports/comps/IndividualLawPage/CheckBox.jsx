import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './CheckBox.css';

export default class CheckBox extends Component {

  render () {
    return (
      <div>
            <label className="material-checkbox">
                <input id="checkboxinput" type="checkbox" />
                <span id="checkboxspan"></span>
            </label>
      </div>
    )
  }
}
