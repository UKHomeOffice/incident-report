'use strict';
const create = require('./behaviours/create-incident');
const summary = require('hof-behaviour-summary-page');
const sendEmail = require('./behaviours/send-email');

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
      behaviours: [create, summary, sendEmail],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
