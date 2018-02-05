import {Resolutions} from '../imports/components/resolutions/ResolutionsWrapper.jsx';
import {text} from '../imports/components/resolutions/ResolutionsWrapper.jsx';

Meteor.methods({
  addResolution(resolution) {

    if(!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Resolutions.insert({  //Method needed for this insert to work, because insecure has been removed
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },

  toggleResolution(resolution) {  //passes through id of each individual SingleResolution, as well as its status

/*    if(!Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('not-authorized');
    } */

    Resolutions.update(resolution._id, {
      $set: {complete: !resolution.complete} // if status already = true, this sets it to false, and vice versa
    });
  },

  deleteResolution(resolution) {

  /*  if(!Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('not-authorized');
    } */

    Resolutions.remove(resolution._id);
  }
});
