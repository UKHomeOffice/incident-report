'use strict';

module.exports = {
  name: 'incident-report',
  steps: {
    '/describe': {
      fields: ['describe'],
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
