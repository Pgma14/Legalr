import React, {Component} from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import "./DataTable3.css";

export default class DataTable3 extends Component {
  render () {
    return (
    <div>
      <Container className="LawheadItem">
        <Row className="LawheadRow">
          <Col md="4" sm="4" xs="4" className="text-center">
            <Container>
              <Col md="12" sm="12" xs="12" id="col1" className="headerCol text-center">
                <h5 className="HeaderH5" >Law Title</h5>
              </Col>
            </Container>
          </Col>

          <Col md="5" sm="5" xs="5" className="text-center">
            <Container>
              <Col md="12" sm="12" xs="12" id="col1" className="headerCol text-center">
                <h5 className="HeaderH5">Summary</h5>
              </Col>
            </Container>
          </Col>

          <Col md="3" sm="3" xs="3" className="text-center">
            <Container>
              <Col md="12" sm="12" xs="12" id="col1" className="headerCol text-center">
                <h5 className="HeaderH5">Who it Affects</h5>
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>

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
