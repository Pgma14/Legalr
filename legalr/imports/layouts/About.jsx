import React, {Component} from 'react';
import AccountsUI from '../accounts-ui.jsx';



export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
      
    return (
      <div>
        <h1>About Us</h1>
        <p>Hipster Shmister All natural farm to table butcher vegan</p>
        <button onClick={this.setVar}>Sign Up!</button>
      </div>
    )
  }
}
