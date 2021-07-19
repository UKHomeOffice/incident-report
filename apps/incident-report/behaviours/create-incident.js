/* eslint-disable no-console */
'use strict';
const db = require('../../common/models/db-query');
const uuid = require('short-uuid');
const table = 'incidents'

module.exports = superclass => class extends superclass {
  async saveValues (req, res, next) {
    try {
      // so we can use this when we send it gov-notify
      req.sessionModel.set('incident-id', uuid.generate())
      await db.createIncident({
        table: table,
        'incident-id': req.sessionModel.attributes['incident-id'],
        incident: req.sessionModel.attributes.incident,
        location: req.sessionModel.attributes.location,
        date: req.sessionModel.attributes.date,
        'first-name': req.sessionModel.attributes['first-name'],
        'last-name': req.sessionModel.attributes['last-name'],
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
