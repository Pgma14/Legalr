import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Button, Input, InputGroupDropDown, InputGroupButtonDropdown } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import SignUpSignIn from './SignUpSignIn.jsx';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';

import './LandingHeader.css';

export default class LandingHeader extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.state = {
      SignUpClicked: false,
      SignInClicked: false,
    };

    this.SignUpClick = this.SignUpClick.bind(this);
    this.SignInClick = this.SignInClick.bind(this);
    this.onBackChevronClick = this.onBackChevronClick.bind(this);

    this.toggle = this.toggle.bind(this);
  }

    SignUpClick() {
      this.setState({
        SignUpClicked: true,
      });
    }

    SignInClick() {
      this.setState({
        SignInClicked: true,
      });
    }

    onBackChevronClick() {
      this.setState({
        SignInClicked: false,
        SignUpClicked: false,
      });
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
                  <Button id="GetStartedButton" color="primary" onClick={this.toggle}>Get Started</Button>
                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                   {this.state.SignUpClicked || this.state.SignInClicked ? (
                     <ModalHeader className="text-center"><i onClick={this.onBackChevronClick} id="LeftChevron" className="fa fa-chevron-left"></i>Get Started</ModalHeader>
                   ) : (
                     <ModalHeader className="text-center">Get Started</ModalHeader>
                 )}
                   <ModalBody id="ModalBody">
                     <Row id="LoginRow">
                       <Col md="12" sm="12" xs="12" className="text-center" id="FB_Col">
                     <div className="fb-login-button" data-width="200" data-max-rows="1" data-size="large"
                      data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false"
                      data-use-continue-as="false"></div>
                        </Col>
                        <Col md="12" sm="12" xs="12" className="text-center" id="or">
                      <p>Or</p>
                         </Col>
                         <SignUpSignIn signUpClicked={this.state.SignUpClicked} signInClicked={this.state.SignInClicked} SignInClick={this.SignInClick} SignUpClick={this.SignUpClick}/>
                      </Row>
                   </ModalBody>
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
