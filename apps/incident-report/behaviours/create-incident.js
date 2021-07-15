/* eslint-disable no-console */
'use strict';
const db = require('../models/crud-incident');

module.exports = superclass => class extends superclass {
  async saveValues (req, res, next) {
    try {
      await db.createIncident({
        incident: req.sessionModel.attributes.incident,
        'user-email': req.sessionModel.attributes['user-email'],
        'manager-email': req.sessionModel.attributes['manager-email'],
      });
    } catch (err) {
      console.error(err);
    }

    super.saveValues(req, res, (err) => {
      next(err);
    });
  }
};
