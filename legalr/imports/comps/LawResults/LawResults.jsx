import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import DataTable from './DataTable.jsx';
import SearchToggle from './SearchToggle.jsx';


import './LawResults.css';


export default class LawResults extends Component {
  render () {
    return (
      <Container fluid>
        <Row id="ResultBackground">
          <Container>
            <Row>
              <Col md="3" sm="3" xs="3" className="text-center">

                  <Col md="12" sm="12" xs="12" className="text-center" id="SearchContainer">
                      <SearchToggle />
                  </Col>

                  <Col md="12" sm="12" xs="12" className="text-center" id="RecommendationContainer">
                  </Col>

              </Col>

              <Col md="8" sm="8" xs="8" className="text-center" id="ResultsContainer">
                  <DataTable />
              </Col>

            </Row>
          </Container>
        </Row>
      </Container>
    )
  }
}
