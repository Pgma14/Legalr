import React from "react";
import { render } from "react-dom";
import SubscribeForm from "./SubscribeForm.jsx";

const formProps = {
  action:
    "https://legalr.us17.list-manage.com/subscribe/post?u=74d0c8dcb54f909ba3472012e&amp;id=72461557d3",
    messages: {
    inputPlaceholder: "E-mail",
    btnLabel: "Sign Up",
    sending: "Sending",
    success: "Thank you for signing up!",
    error: "Please enter a valid e-mail address."
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
};

const Form = () => <SubscribeForm {...formProps} />;

export default Form;
