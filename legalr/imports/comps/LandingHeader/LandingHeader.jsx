import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input, InputGroupDropDown, InputGroupButtonDropdown } from 'reactstrap';


import './LandingHeader.css';

export default class LandingHeader extends Component{
  render () {
    return (
      <div>
      <Container fluid className="Header_Background">
        <Row id="Header_Row1">
          <Col md="12" sm="12" xs="12" className="text-center" id="Header_Col">
              <Col md="12" sm="12" xs="12" className="text-center" id="Logo">
                <h1>
                  Action made easy.
                </h1>
                <br></br>
              <h4>Passionate about _____?</h4>
              </Col>
              <Col md="12" sm="12" xs="12" className="text-center" id="alert-signup">
                <InputGroup>
                  <Input type="text" placeholder="E-mail" />
                  <InputGroupAddon addonType="append"><Button>A</Button></InputGroupAddon>
                </InputGroup>
              </Col>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
