import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchToggle from '../Results/SearchToggle.jsx';
import {Doughnut} from 'react-chartjs-2';

import './TrackImpact.css';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default class TrackImpact extends Component {

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
                    <h3 id="LawTitle">Track Your Impact</h3>
                    <Row id="SummaryRow">
                      <Col md="6" sm="12" xs="12" className="text-center SummaryCol">
                        <h5 id="SummaryH5">Who Has Acted</h5>
                          <Doughnut data={data} />
                      </Col>
                      <Col md="6" sm="12" xs="12" className="text-center">
                        <h5 id="WhoItAffectsH5">What they have done</h5>
                          <Doughnut data={data} />
                      </Col>

                    </Row>
                    <Row id="MoreInfoRow">
                        <Col lg="4" md="4" sm="4" xs="12">
                        <div id="MoreInfoWrapper1">
                            <i className="MoreInfoIcon fa fa-file-text"></i>
                            <Col md="12" sm="12" xs="12" className="sciencespo">
                              <p className="MoreInfoP">Full Text</p>
                            </Col>
                          </div>
                        </Col>
                        <Col lg="4" md="4" sm="4" xs="12">
                          <div id="MoreInfoWrapper2">
                            <i className="MoreInfoIcon fa fa-list"></i>
                            <Col md="12" sm="12" xs="12" className="sciencespo">
                              <p className="MoreInfoP">Track Bill</p>
                            </Col>
                        </div>
                        </Col>
                        <Col lg="4" md="4" sm="4" xs="12">
                          <div id="MoreInfoWrapper3">
                            <i id="InboxIcon" className="MoreInfoIcon fa fa-inbox"></i>
                            <Col md="12" sm="12" xs="12" className="sciencespo">
                              <p className="MoreInfoP">Get Alerts</p>
                            </Col>
                        </div>
                        </Col>
                    </Row>
                    <button className="TakeActionButton"><p id="TakeAction">Take Action</p></button>

                </Col>

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


              </Col>
            </Row>
          </Container>

        </Row>
      </Container>
    )
  }
}
