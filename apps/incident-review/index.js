'use strict';
const checkTokenGetIncident = require('./behaviours/check-token-get-incident');
const fullWidth = require('../common/behaviour/full-width');

module.exports = {
  name: 'incident-review',
  baseUrl: '/incident-review',
  pages: {
    '/token-invalid': 'token-invalid'
  },
  steps: {
    '/start':{
      behaviours: [checkTokenGetIncident],
      next: '/manager'
    },
    '/manager': {
      fields: ['manager-comments'],
      behaviours: [fullWidth],
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
