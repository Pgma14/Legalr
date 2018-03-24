import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './LandingHeader.css';

export default class SignIn extends Component {
  render () {
    return (
    <div>
      <Container fluid>
        <Row>
          <Col md="12" sm="12" xs="12" className="text-center">
        <input
          className="alert-signup-input"
          placeholder="E-mail"
          type="email"
          name="EMAIL"
        />
          </Col>

          <Col md="12" sm="12" xs="12" className="text-center">
        <input id="PasswordInput"
         className="alert-signup-input"
         placeholder="Password"
         type="password"
         name="password"
         />
          </Col>

        <Col md="12" sm="12" xs="12" className="text-center">
          <button
            type="submit"
            className="btn-group"
            id="AlertButton"
            className="text-center"
          >
            <p>Sign In</p>
          </button>
        </Col>
      </Row>
    </Container>
    </div>
    )
  }
}
