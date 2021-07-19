'use strict';
const db = require('../../common/models/db-query');

module.exports = superclass => class extends superclass {
  async saveValues(req, res, callback) {
    try {
      const token = req.query.token;
      // skips if a session is already present
      if (req.sessionModel.attributes['valid-token'] === true) {
        return super.saveValues(req, res, callback)
      }

      if (token) {
        const record = await db.get(token);
        if (record) {
          req.sessionModel.set('incident-record', record.pop());
          req.sessionModel.set('valid-token', true);
          return super.saveValues(req, res, callback)
        }
      }
      return res.redirect('/incident-review/token-invalid');
    } catch (err) { 
      console.error(err)
    }
  }
};
