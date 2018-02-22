import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Accolades.css';

export default class Accoladese extends Component {
  render () {
    return (
      <div>
        <Container fluid>

        <Row id="AccoladesRow">
          <Container id="innerAccoladesContainer">
            <Row>
            <Col lg="6" md="6" sm="6" xs="12" id="TigerLaunch" className="AccoladesCol">
              <img src="TigerLaunch.png"></img>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" id="Almaworks" className="AccoladesCol">
              <img src="almaworks.png"></img>
            </Col>
            </Row>
            </Container>
        </Row>

        </Container>
      </div>
    )
  }
}
