'use strict';

module.exports = {
  name: 'incident-report',
  steps: {
    '/describe': {
      fields: ['describe'],
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
