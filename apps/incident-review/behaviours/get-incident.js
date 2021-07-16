'use strict';
const db = require('../models/read-incident');

module.exports = superclass => class extends superclass {
  getValues(req, res, callback) {
    super.getValues(req, res, async (err, values) => {
      const record = await db.getAll('5PZNuCT3xunD6qhAPL2bex');
      values['incident-record'] = record.pop();
      callback(err, values);
    });
  }
};
