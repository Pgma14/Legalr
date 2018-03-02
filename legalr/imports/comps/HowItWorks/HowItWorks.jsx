import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './HowItWorks.css';

export default class HowItWorks extends Component {
  render () {
    return (
      <Container fluid className="text-center" id="How_It_Works">
        <Row>
          <Col md="12" sm="12" xs="12" className="text-center" id="HowItWorks-background">
            <div id="How_It_Works_container">
                <h1 id="How_It_Works_h1">How It Works</h1>
            </div>
              <Container>
              <Row id="HowItWorksRow">
                  <Col lg="4" md="4" sm="4" xs="12" className="HowItWorksIcons text-center">
                    <i className="HowItWorksUser fa fa-user" />
                    <h3 className="text-center">Let us know a little about you</h3>
                  </Col>
                  <Col lg="4" md="4" sm="4" xs="12" className="HowItWorksIcons text-center">
                    <i className="HowItWorksUser fa fa-mobile" />
                    <h3>Get alerts and summaries on the issues you care about</h3>
                  </Col>
                  <Col lg="4" md="4" sm="4" xs="12" className="HowItWorksIcons text-center">
                    <i className="HowItWorksUser fa fa-rocket" />
                    <h3>Get connected with next steps. Make a difference.</h3>
                  </Col>
              </Row>
             </Container>
          </Col>
        </Row>
      </Container>

    )
  }
}