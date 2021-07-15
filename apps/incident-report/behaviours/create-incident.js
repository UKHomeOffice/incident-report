/* eslint-disable no-console */
'use strict';
const db = require('../models/crud-incident');
const uuid = require('short-uuid');

module.exports = superclass => class extends superclass {
  async saveValues (req, res, next) {
    try {
      // so we can use this when we send it gov-notify
      req.sessionModel.set('user-id', uuid.generate())
      await db.createIncident({
        'user-id': req.sessionModel.attributes['user-id'],
        incident: req.sessionModel.attributes.incident,
        'user-email': req.sessionModel.attributes['user-email'],
        'manager-email': req.sessionModel.attributes['manager-email'],
      })
    } catch (err) {
      console.error(err);
    }

    super.saveValues(req, res, (err) => {
      next(err);
    });
  }
};
