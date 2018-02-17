import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {FreedomOfInformation,
       IntellectualPropertyLaw,
       Privacy,
       Immigration,
       Firearms,
       Cannabis,
       Taxes,
       SmallBusiness} from './LawCards/LawCards.jsx';

export default class LawLayout extends Component {
  render () {
    return (
<div>
      <div>
        <Row>
              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <FreedomOfInformation />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <IntellectualPropertyLaw />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <Privacy />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <Immigration />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <Firearms />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <Cannabis />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <Taxes />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <SmallBusiness />
              </Col>
          </Row>
      </div>
    )
  }
}
