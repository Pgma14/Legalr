import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {FreedomOfInformation,
       CryptoCurrency,
       Privacy,
       Immigration,
       Firearms,
       Cannabis,
       Taxes,
       SmallBusiness} from './LawCards/LawCards.jsx';

import './LawLayout.css';

export default class LawLayout extends Component {
  render () {
    return (

      <div>
        <Row>
              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                  <Privacy />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <CryptoCurrency />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <Immigration />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <Cannabis />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                <Firearms />
              </Col>

              <Col className="law_cards" lg="3" md="4" sm="6" xs="6">
                 <FreedomOfInformation />
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
