'use strict';

module.exports = {
  name: 'incident-report',
  baseUrl: '/incident-report',
  steps: {
    '/name': {
      fields: ['name'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
