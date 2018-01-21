import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';

import Popper from 'popper.js';
window.Popper = Popper;


var mapSections = ['click #us_map path', 'click #us_map polygon',
'click #canada_map path', 'click #canada_map polygon', 'click #eu_map path',
'click #eu_map polygon', '#france_map path', '#france_map polygon']

Template.body.events({
  // Choose State
  "click path": function (event) {
    // Scroll to Results
    // target element id
    var id = $(".data_table_header");
    // top position relative to the document
    var pos = $(id).offset().top;
    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 1000);
    // Set state select
    document.getElementById("choose-state").value = event.target.id;
  },

  "click polygon": function (event) {
    Session.set("filterByState", event.target.id);
  // Scroll to Results
  // target element id
  var id = $(".data_table_header");
  // top position relative to the document
  var pos = $(id).offset().top;
  // animated top scrolling
  $('body, html').animate({scrollTop: pos}, 1000);
  // Set state select
  document.getElementById("choose-state").value = event.target.id;
  },


});
