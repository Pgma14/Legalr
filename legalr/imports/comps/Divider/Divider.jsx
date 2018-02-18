import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Divider.css';

export default class Divider extends Component {
  render () {
    return (
      <Container fluid>
        <Row>
          <Col md="12" sm="12" xs="12" className="text-center" id="instructions">
            <h1>Select a state</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}
