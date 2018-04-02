import React, {Component} from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import "./DataTable3.css";

export default class SingleLaw extends Component {
  render () {
    return (
    <div>


      <Container className="LawItem">
        <Row className="lawRow">
          <Col md="4" sm="4" xs="4" id="col1" className="text-center">
            <h5 id="lawtitlecol" className="centeredText">A Bill to Help Working Families</h5>
          </Col>
          <Col md="5" sm="5" xs="5" className="text-center">
            <h5 id="summarycol" className="centeredText">A bill that increases tax deductions for middle class families</h5>
          </Col>
          <Col md="3" sm="3" xs="3" className="text-center">
            <h5 className="centeredText">Small Business Owners</h5>
          </Col>
        </Row>
      </Container>

      </div>
    );
  }

  }
