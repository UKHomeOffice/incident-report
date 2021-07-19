/* eslint-disable no-console */
'use strict';
const db = require('../../common/models/db-query');

module.exports = superclass => class extends superclass {
  async saveValues (req, res, next) {
    try {
      await db.update({
        table: 'incidents',
        id: req.sessionModel.attributes['incident-record'].id,
        'manager-comments': req.sessionModel.attributes['manager-comments'],
        'complete': true
      })
    } catch (err) {
      console.error('db query=======> update failed', err);
    }

    super.saveValues(req, res, (err) => {
      next(err);
    });
  }
};
