import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import DataTable1 from './DataTable1.jsx';
import DataTable2 from './DataTable2.jsx';
import DataTable3 from './DataTable3.jsx';
import SearchToggle from './SearchToggle.jsx';


import './Results.css';


export default class LawResults extends Component {
  render () {
    return (
      <Container fluid>
        <Row id="ResultBackground">
          <Container id="resultsparentcontainer">
            <Row>
              <Col md="3" sm="3" xs="3" className="text-center">

                  <Col md="12" sm="12" xs="12" className="text-center" id="SearchContainer">
                      <SearchToggle />
                  </Col>

                  <Col md="12" sm="12" xs="12" className="text-center" id="RecommendationContainer">

                  </Col>

              </Col>

              <Col md="9" sm="9" xs="9" className="text-center" id="ResultsContainer1">
                  <DataTable3 />
              </Col>

            </Row>
          </Container>
        </Row>
      </Container>
    )
  }
}
