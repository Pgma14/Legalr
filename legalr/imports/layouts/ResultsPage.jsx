import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import LawResults from '../comps/LawResults/LawResults.jsx';

import './ResultsPage.css';

export default class ResultsPage extends Component {
  render () {
    return (
      <div>
        <Container fluid>

            <Container fluid>
              <LawResults />
            </Container>

        </Container>
      </div>
    )
  }
}
