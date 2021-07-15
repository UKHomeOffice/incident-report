/* eslint no-process-env: 0 */
'use strict';

module.exports = {
  tokenExpiry: 86400,
  govukNotify: {
    notifyApiKey: process.env.NOTIFY_KEY || '',
    managerTemplateId: process.env.TEMPLATE_USER_AUTHORISATION_ID || 'a1e51b8a-4bd8-4caa-af79-c7cb19377ade'
  }
};
