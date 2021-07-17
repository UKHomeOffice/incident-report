'use strict';
const getAllIncidents = require('./behaviours/get-all-incidents');
const fullWidth = require('../common/behaviour/full-width');

module.exports = {
  name: 'admin',
  baseUrl: '/admin',
  steps: {
    '/reports': {
      behaviours: [getAllIncidents, fullWidth],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
