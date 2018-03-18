import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';

import './LandingHeader.css';

export default class SignUpSignIn extends Component {

  constructor() {
     super();

     this.state = {
       SignUpClicked: false,
       SignInClicked: false,
     };

     this.SignUpClick = this.SignUpClick.bind(this);
     this.SignInClick = this.SignInClick.bind(this);
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

  render () {

  if (this.state.SignUpClicked) {
    return(
      <SignUp />
    ) } else if (this.state.SignInClicked) {
    return (
      <SignIn />
    )
  } else {
      return (
      <div id="SignUpSignInDiv">
        <Col md="12" sm="12" xs="12" className="text-center">
            <Button id="SignUpButton" color="primary" onClick={this.SignUpClick}> Sign Up </Button>
         </Col>
         <Col md="12" sm="12" xs="12" className="text-center">
           <Button id="SignInButton" color="primary" onClick={this.SignInClick}>Sign In</Button>
         </Col>
      </div>
          )
        }
  }
}
