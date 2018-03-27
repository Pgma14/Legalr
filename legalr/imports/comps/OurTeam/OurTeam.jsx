import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import './OurTeam.css';

export default class OurTeam extends Component {
  render () {
    return (
      <div>


      <Container fluid>
        <Row>
          <Col md="12" sm="12" xs="12" className="ourTeam-hedding text-center" id="Our_Team">
            <h1>Our Team</h1>
          </Col>
        </Row>
      </Container>

      <Container className="OurTeam_Wrapper">
        <Row>

          <Col lg="3" md="4" sm="6" xs="12">
            <Row className="section-success ourTeam-box text-center">
              <Col md="12" className="section1">
                <img src="George.jpg" />
              </Col>

              <Col md="12" sm="12" xs="12" className="section2">
                <p>George Mgaloblishvili</p>
                  <Col md="12" sm="12" xs="12">
                  <h1>Founder, CEO</h1><br></br><br></br>
                </Col>
              </Col>

              <Col md="12" sm="12" xs="12" className="columbia">
                <img src="ColumbiaUniversity.png" />
              </Col>
            </Row>
          </Col>

          <Col lg="3" md="4" sm="6" xs="12">
            <Row className="section-info ourTeam-box text-center">
              <Col md="12" className="section1">
                <img src="Vladyslav.jpg" />
              </Col>

              <Col md="12" sm="12" xs="12" className="section2">
                <p>Vladyslav Bobrovnyk</p>
                <Col md="12" sm="12" xs="12">
                  <h1>CFO</h1><br></br><br></br>
                </Col>
              </Col>

              <Col md="12" sm="12" xs="12" className="columbia">
                <img src="ColumbiaUniversity.png" />
              </Col>
            </Row>
          </Col>

          <Col lg="3" md="4" sm="6" xs="12">
            <Row className="section-danger ourTeam-box text-center">
              <Col md="12" sm="12" xs="12" className="section1">
                <img src="Athena.jpg" />
              </Col>

              <Col md="12" sm="12" xs="12" className="section2">
                <p>Athena Kerins</p>
                  <Col md="12" sm="12" xs="12">
                  <h1>Director of Operations, Canada</h1><br></br><br></br>
                </Col>
              </Col>

              <Col md="12" sm="12" xs="12" className="ubc">
                <img src="ubc.png" />
              </Col>
            </Row>
          </Col>

          <Col lg="3" md="4" sm="4" xs="12">
            <Row className="section-danger ourTeam-box text-center">
              <Col md="12" sm="12" xs="12" className="section1">
                <img src="Alexandra.jpg" />
              </Col>

              <Col md="12" sm="12" xs="12" className="section2">
                <p>Alexandra Junge</p>
                  <Col md="12" sm="12" xs="12">
                  <h1>Director of Operations, France</h1><br></br><br></br>
                </Col>
              </Col>

              <Col md="12" sm="12" xs="12" className="sciencespo">
                <img src="SciencesPo.png" />
              </Col>
            </Row>
          </Col>

          <Col lg="6" md="4" sm="4" xs="12">
            <Row className="section-danger ourTeam-box text-center">
              <Col md="12" sm="12" xs="12" className="section1">
                <img src="Matthew.jpg" />
              </Col>

              <Col md="12" sm="12" xs="12" className="section2">
                <p>Matthew Huggins</p>
                <Col md="12" sm="12" xs="12">
                  <h1>Advisor, CSO at EasyEMail</h1><br></br><br></br>
                </Col>
              </Col>


          <Container  className="MIT">
            <Row>
              <Col md="12" sm="12" xs="12">
              <img src="MIT.svg" id="MIT_logo" />
              </Col>
            </Row>
          </Container>

            </Row>
          </Col>




        </Row>
      </Container>

      </div>
    )
  }
}
