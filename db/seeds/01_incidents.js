/* eslint-disable filenames/match-regex, camelcase */
'use strict';

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('incidents').del()
    .then(() => {
      // Inserts seed entries
      return knex('incidents').insert([
        { id: 1, incident: 'fell on a banana', user_email: 'sulthan.ahmed@digital.homeoffice.gov.uk',
        manager_email: 'test1@test.com'},
        { id: 2, incident: 'someone took my chair as I was sitting', user_email: 'test3@test.com',
        manager_email: 'sulthan.ahmed@digital.homeoffice.gov.uk'}
      ]);
    });
};
