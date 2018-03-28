import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchToggle from '../LawResults/SearchToggle.jsx';

import './IndividualLawPage.css';
import '../OurTeam/OurTeam.css';

export default class IndividualLawPage extends Component {

  injectApi() {
  Meteor.call("checkTwitter", function(error, results) {
       console.log(results.content); //results.data should be a JSON object
   });
 }

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

                <Col md="9" sm="12" xs="12" className="text-center">
                  <Col md="12" sm="12" xs="12" className="text-center" id="ResultsContainer">
                    <h3 id="LawTitle">An Act to Help Working Families</h3>
                    <Row id="SummaryRow">
                      <Col md="6" sm="12" xs="12" className="text-center SummaryCol">
                        <h5 id="SummaryH5">Summary</h5>
                          <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                          </p>
                      </Col>
                      <Col md="6" sm="12" xs="12" className="text-center">
                        <h5 id="WhoItAffectsH5">Why You Should Care</h5>
                          <p>
                            Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                          </p>
                      </Col>
                    { /*}  <Col md="12" sm="12" xs="12" className="text-center MoreInfo">
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
                      </Col> {*/ }
                    </Row>
                    <Row id="HowToContactRow">
                        <Col lg="4" md="4" sm="4" xs="12">
                          <i className="MoreInfoIcon fa fa-file-text"></i>
                          <Col md="12" sm="12" xs="12" className="sciencespo">
                            <p className="MoreInfoP">Full Text</p>
                          </Col>
                        </Col>
                        <Col lg="4" md="4" sm="4" xs="12">
                          <i className="MoreInfoIcon fa fa-list"></i>
                          <Col md="12" sm="12" xs="12" className="sciencespo">
                            <p className="MoreInfoP">Track Bill</p>
                          </Col>
                        </Col>
                        <Col lg="4" md="4" sm="4" xs="12">
                          <i id="InboxIcon" className="MoreInfoIcon fa fa-inbox"></i>
                          <Col md="12" sm="12" xs="12" className="sciencespo">
                            <p className="MoreInfoP">Get Alerts</p>
                          </Col>
                        </Col>
                    </Row>
                    <button className="TakeActionButton"><p id="TakeAction">Take Action</p></button>
                  {/*}
                    <Container>
                      <Row>
                        <Col md="6" sm="6" xs="12" className="text-center">
                          <Col md="12" sm="12" xs="12" className="text-center  ActionCard" id="govcard">
                          <img src="government.png" className="ActionIcon"></img>
                          <h5>Contact Your Representative</h5>
                            <button className="ActionButton"><p>Select</p></button>
                        </Col>
                      </Col>
                        <Col md="6" sm="6" xs="12" className="text-center">
                          <Col md="12" sm="12" xs="12" className="text-center  ActionCard" id="megaphonecard">
                          <img src="megaphone.png" className="ActionIcon"></img>
                          <h5>Find an event near you</h5>
                          <button className="ActionButton"><p>Select</p></button>
                        </Col>
                      </Col>
                      </Row>
                    </Container>
                    {*/}
                </Col>

                {/*}
                    <Col md="12" sm="12" xs="12" className="text-center" id="EventsContainer">
                      <h4 id="EventsH4">Events Near You</h4>
                      <div
                          className="fb-like"
                          data-share="true"
                          data-width="450"
                          data-show-faces="true">
                          </div>
                    </Col> {*/}

                    <Col md="12" sm="12" xs="12" className="text-center" id="EventsContainer">
                      <h4 id="EventsH4">Who to Contact</h4>

                    <Row>
                      <Col lg="6" md="6" sm="6" xs="12">
                        <Row className="section-danger ourTeam-box text-center">
                          <Col md="12" sm="12" xs="12" className="section1">
                            <img src="jim_himes.jpg" />
                          </Col>

                          <Col md="12" sm="12" xs="12" className="section2">
                            <p>Jim Himes</p>
                              <Col md="12" sm="12" xs="12">
                              <h1>Congressman for the State of Connecticut</h1><br></br>
                            </Col>
                          </Col>

                          <Col md="12" sm="12" xs="12" className="sciencespo">
                            <button className="ActionButton"><p>Contact</p></button>
                          </Col>
                        </Row>
                      </Col>

                      <Col lg="6" md="6" sm="6" xs="12">
                        <Row className="section-danger ourTeam-box text-center">
                          <Col md="12" sm="12" xs="12" className="section1">
                            <img src="elizabeth_warren.jpg" />
                          </Col>

                          <Col md="12" sm="12" xs="12" className="section2">
                            <p>Elizabeth Warren</p>
                              <Col md="12" sm="12" xs="12">
                              <h1>Senator for the State of Massachuessets</h1><br></br>
                            </Col>
                          </Col>

                          <Col md="12" sm="12" xs="12" className="sciencespo">
                            <button className="ActionButton"><p>Contact</p></button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    </Col>

                    <Col md="12" sm="12" xs="12" className="text-center" id="EventsContainer">
                      <h4 id="EventsH4">How to Contact Them</h4>
                    <Row id="HowToContactRow">
                        <Col lg="4" md="4" sm="4" xs="12">
                          <i className="HowToContactIcon fa fa-list"></i>
                            <Col md="12" sm="12" xs="12" className="sciencespo">
                            <button className="ActionButton"><p>Start a Petition</p></button>
                            </Col>
                        </Col>
                        <Col lg="4" md="4" sm="4" xs="12">
                          <i className="HowToContactIcon fa fa-phone"></i>
                          <Col md="12" sm="12" xs="12" className="sciencespo">
                          <button className="ActionButton"><p>Contact</p></button>
                          </Col>
                        </Col>
                        <Col lg="4" md="4" sm="4" xs="12">
                          <i className="HowToContactIcon fa fa-envelope"></i>
                          <Col md="12" sm="12" xs="12" className="sciencespo">
                            <button className="ActionButton"><p>E-mail</p></button>
                          </Col>
                        </Col>
                    </Row>
                    </Col>
              </Col>
            </Row>
          </Container>

        </Row>
      </Container>
    )
  }
}
