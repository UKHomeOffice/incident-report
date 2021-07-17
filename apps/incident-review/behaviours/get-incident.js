'use strict';
const db = require('../models/read-incident');

module.exports = superclass => class extends superclass {
  getValues(req, res, callback) {
    super.getValues(req, res, async (err, values) => {
      const token = req.query.token;
      // skips if a session is already present
      if (req.sessionModel.attributes['valid-token'] === true) {
        return callback(err, values);
      }

      if (token) {
        const record = await db.get(token);
        if (record) {
          values['incident-record'] = record.pop();
          return callback(err, values);
        }
      }
      return res.redirect('/incident-review/token-invalid');
    });
  }
};
