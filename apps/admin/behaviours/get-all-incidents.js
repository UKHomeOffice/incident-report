'use strict';
const db = require('../models/read-all-incidents');
const _ = require('lodash');

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const superlocals = super.locals(req, res);
    const data = Object.assign({}, {
      previousReports: _.sortBy(req.previousReports, 'id').reverse()
    });
    const locals = Object.assign({}, superlocals, data);

    return locals;
  }
  
  getValues(req, res, next) {
    req.previousReports = [
      {id: 1, reference: "sulthan-test1", createdAt: "15 March 2021", expiresAt: "12 April 2021", daysRemaining: -95},
      {id: 1, reference: "sulthan-test2", createdAt: "15 March 2021", expiresAt: "12 April 2021", daysRemaining: -95},
    ];
    super.getValues(req, res, next);
  }
};

