import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';

import './LandingHeader.css';

export default class SignUpSignIn extends Component {

  constructor() {
     super();

     this.state = {
       clicked: false
     };

     this.handleClick = this.handleClick.bind(this);
   }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render () {

    return (
    <div id="SignUpSignInDiv">
      <Col md="12" sm="12" xs="12" className="text-center">
        <div onClick={this.handleClick}>
          {this.state.clicked ? <SignUp /> : null}
        <Button id="SignUpButton" color="primary"> Sign Up </Button>
        </div>
       </Col>
       <Col md="12" sm="12" xs="12" className="text-center">
         <Button id="SignInButton" color="primary" onClick={this.switch}>Sign In</Button>
        </Col>
    </div>
  )

  }
}
