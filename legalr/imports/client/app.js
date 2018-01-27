import React from 'react';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1>My Resolutions</h1>
          <form className="new-resolution">
            <input
              type="text"
              ref="resolution"
              placeholder="Finish React Meteor Series" />
          </form>
      </div>
    )
  }
}
