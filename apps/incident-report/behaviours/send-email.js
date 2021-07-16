/* eslint-disable no-console */
'use strict';
const config = require('../../../config');
const notifyApiKey = config.govukNotify.notifyApiKey;
const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyClient = new NotifyClient(notifyApiKey);
const templateId = config.govukNotify.managerTemplateId;
const appPath = require('../../incident-review').baseUrl;
const firstStep = '/manager';

const getPersonalisation = (host, token) => {
  return {
    // pass in `&` at the end in case there is another
    // query e.g. ?hof-cookie-check
    'link': `http://${host + appPath + firstStep}?token=${token}&`
  };
};

const sendEmail = (email, host, token) => {
  notifyClient
    .sendEmail(templateId, email, {
      personalisation: getPersonalisation(host, token)
    })
    // we will need to log out the response to a proper logger
    // eslint-disable-next-line no-console
    .then(console.log(`email sent to ${email}`))
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};

module.exports = superclass => class extends superclass {

  saveValues(req, res, callback) {
    super.saveValues(req, res, err => {
      const email = req.sessionModel.attributes['manager-email'];

      const host = req.get('host');
      const token = req.sessionModel.attributes['user-id'];
      sendEmail(email, host, token);
      return callback(err);
    });
  }
};
