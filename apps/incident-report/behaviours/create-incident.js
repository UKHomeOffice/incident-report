'use strict';
const db = require('../models/crud-incident');

module.exports = superclass => class extends superclass {

  saveValues(req, res, callback) {
    super.saveValues(req, res, err => {
      console.log('.............create-incide func');
      db.createIncident();
      return callback(err);
    });
  }
};
