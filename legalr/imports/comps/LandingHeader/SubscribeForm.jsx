import React from "react";
import PropTypes from "prop-types";
import jsonp from "jsonp";
import {Button, Input} from 'reactstrap';

import './LandingHeader.css';

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.input.value = '';
    this.setState({ value: '' });
}

  onSubmit = e => {
    e.preventDefault()
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf("@") === -1) {
      this.setState({
        status: "error"
      })
      return
    }
    const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(this.input.value)}`;
    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          Bert.alert('Please enter a valid e-mail', 'danger', 'growl-bottom-right');
          this.setState({
            status: 'error',
            msg: '',
          })
        } else if (data.result !== 'success') {
          Bert.alert('Please enter a valid e-mail', 'danger', 'growl-bottom-right');
          this.setState({
            status: 'error',
            msg: '',
          })

        } else {
          Bert.alert('Thank you for signing up!', 'info', 'growl-bottom-right');
          this.input.value = "";
          this.setState({
            status: 'success',
            msg: '',
            inputPlaceholder: "E-mail",
            value: '',
          })
        }
      })
    )
  }
  render() {
    const { action, messages, className, style, styles } = this.props
    const { status, msg } = this.state
    return (
      <div className={className} style={style}>
        <center>
        <form onSubmit={this.handleSubmit} action={action} method="post" id="alert-form" noValidate>

            <input
              ref={node => (this.input = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              required={true}
              placeholder={messages.inputPlaceholder}
            />
            <button
              disabled={this.state.status === "sending" || this.state.status === "success"}
              onClick={this.onSubmit}
              type="submit"
              className="btn-group"
              id="AlertButton"
              className="text-center"
            >
              <p>Sign Up</p>
            </button>
              </form>
              </center>
          {status === "error" &&  Bert.alert('Please enter a valid e-mail', 'danger', 'growl-bottom-right')}

      </div>
    )
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.object,
  styles: PropTypes.object
}

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: "Votre email",
    btnLabel: "Envoyer",
    sending: "Envoi en cours...",
    success: "Merci de votre intérêt!<p>Nous devons confirmer votre adresse e-mail. Pour compléter le processus d'abonnement, veuillez cliquer sur le lien contenu dans l'e-mail que nous venons de vous envoyer.</p>",
    error: "Oops, impossible d'enregistrer cette adresse"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}

export default SubscribeForm;
