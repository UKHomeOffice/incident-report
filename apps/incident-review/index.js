'use strict';

module.exports = {
  name: 'incident-review',
  baseUrl: '/incident-review',
  steps: {
    '/incident': {
      fields: ['incident'],
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
