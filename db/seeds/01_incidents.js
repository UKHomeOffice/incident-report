/* eslint-disable filenames/match-regex, camelcase */
'use strict';

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('incidents').del()
    .then(() => {
      // Inserts seed entries
      return knex('incidents').insert([
        { id: 'nxmP3FfGrqgBonoJ8kHyuT', incident: 'fell on a banana', location: 'london', date: '1/1/2021', first_name:'Ayesha', last_name: 'Choudhary', user_email: 'ayeshadigital.homeoffice.gov.uk',
        manager_email: 'sulthan.ahmed@digital.homeoffice.gov.uk'},
        { id: 'rba8R45GmcCPogCRykBhhb', incident: 'cat bit me', location: 'manchester', date: '1/1/2021', first_name:'Mo', last_name: 'Ali', user_email: 'test3@test.com',
        manager_email: 'sulthan.ahmed@digital.homeoffice.gov.uk'}
      ]);
    });
};
