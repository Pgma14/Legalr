import { Meteor } from 'meteor/meteor';

Meteor.publish("laws", function () {
  return Law.find({}).fetch({});
});

Meteor.startup(() => {
  // code to run on server at startup
});
