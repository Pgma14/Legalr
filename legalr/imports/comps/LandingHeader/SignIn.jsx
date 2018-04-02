import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { withHistory, withRouter, Link } from 'react-router-dom';

import './LandingHeader.css';

class SignIn extends Component {

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
        Bert.alert('Incorrect e-mail or password', 'danger', 'growl-bottom-right');
        this.setState({
          error: err.reason
        });
      } else {
        window.location.reload(this.props.history.push('/lawresult'))
      }
    });
  }

  render () {
    const error = this.state.error;
    return (
    <div>
      <Container fluid>
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

export default withRouter(SignIn);
