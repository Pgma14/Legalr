import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './LandingHeader.css';

export default class LandingHeader extends Component{
  render () {
    return (
      <div>
      <Container fluid className="Header_Background">
        <Row>
          <Col md="12" sm="12" xs="12" className="text-center" id="Header_Col">
          <h1 id="Logo">
            Hi
          </h1>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
