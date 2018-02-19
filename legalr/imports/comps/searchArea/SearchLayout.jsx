import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import SearchBar from './SearchBar.jsx';
import LawLayout from './LawLayout.jsx';

import './SearchBar.css';

export default class SearchLayout extends Component {
  render () {
    return (
    <div>

      <Row>
      <Col className="instructions text-center" md="12" sm="12" xs="12" id="search_heading">
        <h1 id="Search_laws">Search laws</h1>
      </Col>
     </Row>

      <div className="container">
        <SearchBar />
      </div>
      <div className="container">
        <LawLayout />
      </div>
    </div>
    )
  }
}
