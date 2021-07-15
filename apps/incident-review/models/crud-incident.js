/* eslint-disable no-process-env, camelcase, no-console */
'use strict';

const config = require('../../../knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(config);
const uuid = require('short-uuid');

const createIncident = async(data) => {
  try {
    await knex('incidents').insert({
      id: uuid.generate(),
      incident: data.incident,
      user_email: data['user-email'],
      manager_email: data['manager-email']
    })
  } catch(err) {
    console.error(err);
  }
};

module.exports = {
  createIncident
};

//   return knex('incidents').insert([
//     { id: 1, incident: 'fell on a banana', user_email: 'sulthan.ahmed@digital.homeoffice.gov.uk',
//     manager_email: 'test1@test.com'},
//     { id: 2, incident: 'someone took my chair as I was sitting', user_email: 'test3@test.com',
//     manager_email: 'sulthan.ahmed@digital.homeoffice.gov.uk'}
//   ]);
// });