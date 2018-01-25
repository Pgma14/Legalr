import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import './index.html';



Law = new Mongo.Collection('laws');


const mapSections = ['path', 'polygon']

// Meteor Blaze Component //
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
