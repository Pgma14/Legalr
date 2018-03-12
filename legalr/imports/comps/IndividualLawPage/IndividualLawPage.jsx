import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchToggle from '../LawResults/SearchToggle.jsx';

import './IndividualLawPage.css';


export default class IndividualLawPage extends Component {
  render () {
    return (
      <Container fluid>
        <Row id="ResultBackground">
          <Container>
            <Row>
                <Col md="3" sm="3" xs="none" className="text-center Supplements">
                  <Col md="12" sm="12" xs="none" className="text-center" id="SearchContainer">
                        <SearchToggle />

                  </Col>
                  <Col md="12" sm="12" xs="12" className="text-center" id="RecommendationContainer">
                    <h4 id="RelatedLawsH4">Related Laws</h4>
                  </Col>
                </Col>

                <Col md="8" sm="11" xs="12" className="text-center" id="ResultsContainer">
                    <h3 id="LawTitle">An Act to Help Working Families</h3>
                    <Row id="SummaryRow">
                      <Col md="6" sm="12" xs="12" className="text-center">
                        <h5>Summary</h5>
                          <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                          </p>
                      </Col>
                      <Col md="6" sm="12" xs="12" className="text-center">
                        <h5>Who it affects</h5>
                          <p>
                            Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                          </p>
                      </Col>
                      <Col md="12" sm="12" xs="12" className="text-center">
                        <h4>More Info</h4>
                        <Row id="MoreInfoRow">
                          <Col md="4" sm="4" xs="4" className="MoreInfoCard text-center">
                            <h6>Full Text</h6><i className="text-center fa fa-file-text"></i>
                          </Col>
                          <Col md="4" sm="4" xs="4" className="MoreInfoCard text-center">
                            <h6>Full Text</h6><i className="text-center fa fa-file-text"></i>
                          </Col>
                          <Col md="4" sm="4" xs="4" className="MoreInfoCard text-center">
                            <h6>Full Text</h6><i className="text-center fa fa-file-text"></i>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <h3 id="TakeAction">Take Action</h3>
                    <Container>
                      <Row>
                        <Col md="6" sm="6" xs="12" className="text-center ActionCard" id="govcard">
                          <img src="government.png" className="ActionIcon"></img>
                          <h5>Contact Your Representative</h5>
                            <button className="ActionButton"><p>Select</p></button>
                        </Col>
                        <Col md="6" sm="6" xs="12" className="text-center ActionCard" id="megaphonecard">
                          <img src="megaphone.png" className="ActionIcon"></img>
                          <h5>Find an event near you</h5>
                          <button className="ActionButton"><p>Select</p></button>
                        </Col>
                      </Row>
                    </Container>
                </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    )
  }
}
