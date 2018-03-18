import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Form from './EmailInput.jsx';

import './LandingHeader.css';

export default class SignUp extends Component {
  render () {
    return (
    <div>
      <Col md="12" sm="12" xs="12" className="text-center">
        <Form />
       </Col>
    </div>
    )
  }
}
