'use strict';

module.exports = {
  name: 'incident-report',
  steps: {
    '/incident': {
      fields: ['incident'],
      next: '/user'
    },
    '/user': {
      fields: ['user-email', 'manager-email'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [require('./behaviours/create-incident'), require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
