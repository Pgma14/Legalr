import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input, InputGroupDropDown, InputGroupButtonDropdown } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import Form from './EmailInput.jsx';
import './LandingHeader.css';

export default class LandingHeader extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {
    return (
      <div>
      <Container fluid className="Header_Background">
        <Row id="Header_Row1">
          <Col md="12" sm="12" xs="12" className="text-center" id="Header_Col">
              <Col md="12" sm="12" xs="12" className="text-center" id="Logo">
                <h1 className="animated fadeIn">
                  Action made easy.
                </h1>
                <br></br>
              <h4>Learn about the issues that affect you. Make a difference.</h4>
              </Col>
              <Col md="12" sm="12" xs="12" className="text-center" id="alert-signup" >
                <InputGroup>
                  <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                   <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                   <ModalBody>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </ModalBody>
                   <ModalFooter>
                     <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                     <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                   </ModalFooter>
                 </Modal>
                </InputGroup>
              </Col>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
