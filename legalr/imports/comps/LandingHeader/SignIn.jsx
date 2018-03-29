import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { withHistory, Link } from 'react-router-dom';

import './LandingHeader.css';

export default class SignIn extends Component {

  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('PasswordInput').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push('/');
      }
    });
  }

  render () {
    const error = this.state.error;
    return (
    <div>
      <Container fluid>
        { error.length > 0 ?
               <div className="alert alert-danger fade in">{error}</div>
               :''}

        <Row>
          <form onSubmit={this.handleSubmit}>
          <Col md="12" sm="12" xs="12" className="text-center">
        <input
          id="login-email"
          className="alert-signup-input"
          placeholder="E-mail"
          type="email"
          name="EMAIL"
        />
          </Col>

          <Col md="12" sm="12" xs="12" className="text-center">
        <input id="PasswordInput"
         className="alert-signup-input"
         placeholder="Password"
         type="password"
         name="password"
         />
          </Col>

        <Col md="12" sm="12" xs="12" className="text-center">
          <button
            type="submit"
            className="btn-group"
            id="AlertButton"
            className="text-center"
          >
            <p>Sign In</p>
          </button>

        </Col>
            </form>
      </Row>

    </Container>
    </div>
    )
  }
}
