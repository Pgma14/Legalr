import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './WhatWeDoV2.css';

export default class WhatWeDoV2 extends Component {
  render () {
    return (
      <Container className="section-what_we_do text-center" id="what_we_do">
        <Row>
          <Col md="12" sm="12" xs="12" className="what_we_do-background text-center" id="what_we_do-background">
            <div id="what_we_do_container">
                <h1 id="what_we_do_h1">What We Do</h1>
                  <center>
                      <p className="heading-subtext-bolder">
                        Legalr is where change happens.
                      </p>
                  </center>
                  <center>
                      <p className="heading-subtext">
                        We give you unbiased access to the laws that affect you, and connect you with the next steps needed for you to make a difference. 
                      </p>
                  </center>
            </div>
          </Col>
        </Row>
      </Container>

    )
  }
}
