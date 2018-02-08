import React, {Component} from 'react';

import Resolutions from './ResolutionsWrapper.jsx';

export default class ResolutionsForm extends Component {

  addResolution(event) { // defines function for "onSubmit"
      event.preventDefault(); // prevents page from re-loading every time you press enter in form
      export let text = this.refs.resolution.value.trim(); // finds value once it is submitted, and "trim" removes excess spaces

      if(text) {
        Meteor.call('addResolution', text, (error, data) => {
            if(error) {
              Bert.alert('Please login before submitting', 'danger', 'growl-top-right');
            } else {
              this.refs.resolution.value = ""; // makes the form reset to empty after you enter a value
            }
        });
      }

  }


  render () {
    return (
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
        <input
          type="text"
          ref="resolution"
          placeholder="Finish React Meteor Series" />
      </form>
    )
  }
}
