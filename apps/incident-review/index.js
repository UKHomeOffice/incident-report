'use strict';
const getIncident = require('./behaviours/get-incident');

module.exports = {
  name: 'incident-review',
  baseUrl: '/incident-review',
  steps: {
    '/manager': {
      fields: ['manager-comments'],
      behaviours: [getIncident],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
