'use strict';
/* eslint-disable no-process-env, camelcase */

const config = require('../../../knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(config);
const uuid = require('short-uuid');

const createIncident = () => {
  console.log('...........crud');  
  console.log(uuid.generate());  
  // knex('incidents').insert({
  //   id: 3,
  //   incident: 'tickled funny bone',
  //   user_email: 'sulthan.ahmed@digital.homeoffice.gov.uk',
  //   manager_email: 'test2@test.com'
  // });
  knex('incidents').insert({
    id: uuid.generate(),
    incident: 'blah',
    user_email: 'sulthan@gmail.com',
    manager_email: 'sulthan@gmail.com'
  })
    .then(() => {})
    .catch((err) => console.error(err));
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
