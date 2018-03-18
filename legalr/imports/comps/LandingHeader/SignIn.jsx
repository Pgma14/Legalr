import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './LandingHeader.css';

export default class SignIn extends Component {
  render () {
    return (
    <div>
      <Col md="12" sm="12" xs="12" className="text-center">
        <Button id="SignUpButton" color="primary" onClick={this.toggle}>Sign Up</Button>
       </Col>
    </div>
    )
  }
}
