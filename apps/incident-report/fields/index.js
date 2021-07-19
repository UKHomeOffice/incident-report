'use strict';
const dateComponent = require('hof-component-date');

module.exports = {
  'date': dateComponent('date', {
    validate: ['required'],
    legend: {
      className: 'visuallyhidden'
    }
  }),
  incident: {
    mixin: 'textarea',
    validate: 'required'
  },
  'first-name': {
    validate: 'required'
  },
  'last-name': {
    validate: 'required'
  },
  'user-email': {
    validate: 'required'
  },
  'manager-email': {
    validate: 'required'
  }
};
