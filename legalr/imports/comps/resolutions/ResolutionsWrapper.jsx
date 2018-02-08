import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

export const Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolutions() {
    return Resolutions.find().fetch(); //MongoDB query which pulls data from database and presents it on the client
  }


  render() {

    return (
      <div>
        <h1>My Resolutions - {Session.get('test')}</h1>
        <ResolutionsForm />

        <ul className="resolutions">
          {this.resolutions().map( (resolution) => {
            return   <ResolutionSingle key={resolution._id} resolution={resolution} />
          })}


        </ul>
      </div>


    )
  }
}
