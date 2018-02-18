import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Footer.css';

export default class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col md="12" sm="12" xs="12" className="footer">
              <h1 id="copyrightleft">© 2018 Legalr</h1>
              <h1 id="disclaimerright"><a data-toggle="collapse" href="#disclaimer_section">Disclaimer</a></h1>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
