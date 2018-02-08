import {Resolutions} from '../imports/comps/resolutions/ResolutionsWrapper.jsx';

Meteor.publish("allResolutions", function(){
  return Resolutions.find({complete:false});
});

Meteor.publish("userResolutions", function(){
  return Resolutions.find({complete:false, user: this.userId});
});
