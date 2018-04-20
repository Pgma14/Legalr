import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './WhatWeDo.css';

export default class WhatWeDo extends Component {
  render () {
    return (
      <Container className="section-what_we_do text-center" id="what_we_do">
        <Row>
          <Col md="12" sm="12" xs="12" className="what_we_do-background1 text-center" id="what_we_do-background">
            <div id="what_we_do_container">
                <h1 id="what_we_do_h1_1">Legalr is where change happens.</h1>
                  <center>
                      <p className="heading-subtext-bolder">
                      </p>
                  </center>
                  <center>
                      <p className="heading-subtext1">
                        We give you unbiased access to the laws that affect you, and connect you with the next steps needed to make a difference.
                      </p>
                  </center>
            </div>
          </Col>
        </Row>
      </Container>

    )
  }
}
