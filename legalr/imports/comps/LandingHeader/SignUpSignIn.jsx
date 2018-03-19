import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import Transition from 'react-transition-group/Transition';

import './LandingHeader.css';

export default class SignUpSignIn extends Component {

  render () {

  if (this.props.signUpClicked) {
    return(
      <div className="SignUpSignInDiv">
      <SignUp />
      </div>
    ) } else if (this.props.signInClicked) {
    return (
      <div className="SignUpSignInDiv">
      <SignIn />
      </div>
    )
  } else {
      return (
      <div className="SignUpSignInDiv">

        <Col md="12" sm="12" xs="12" className="text-center">
            <Button id="SignUpButton" color="primary" onClick={this.props.SignUpClick}> Sign Up </Button>
         </Col>
         <Col md="12" sm="12" xs="12" className="text-center">
           <Button id="SignInButton" color="primary" onClick={this.props.SignInClick}>Sign In</Button>
         </Col>

      </div>
          )
        }
  }
}
