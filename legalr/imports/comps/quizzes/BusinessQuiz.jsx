import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import BusinessForm from './BusinessForm.jsx';


import './BusinessQuiz.css';


export default class BusinessQuiz extends Component {

  render () {

    return (
      <div>
      <Container fluid className="Header_Background">
        <Row id="Header_Row1">
          <Col md="12" sm="12" xs="12" className="text-center" id="Header_Col">
              <Col md="12" sm="12" xs="12" className="text-center" id="BusinessQuiz_Logo">
                <h1 className="animated fadeIn">
                  Starting Up?
                </h1>
                <br></br>
              <h4>Find out what type of company is best for you!</h4>
              </Col>
              <Col md="12" sm="12" xs="12" id="Quiz-Container">

                  <BusinessForm />
                  <br></br><br></br><br></br><br></br><br></br><br></br>

              </Col>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
