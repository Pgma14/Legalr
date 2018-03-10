import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import DataTable from './DataTable.jsx';


import './LawResults.css';


export default class LawResults extends Component {
  render () {
    return (
      <Container fluid id="ResultBackground">
        <Container>
        <Row>
          <Col md="3" sm="3" xs="3" className="text-center" id="SearchContainer">
            <li> a</li>
            <li> b</li>
            <li> c</li>
          </Col>
          <Col md="8" sm="8" xs="8" className="text-center" id="ResultsContainer">
              <DataTable />
          </Col>
        </Row>
        </Container>
      </Container>
    )
  }
}
