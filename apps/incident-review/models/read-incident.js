/* eslint-disable no-process-env, camelcase, no-console */
'use strict';

const config = require('../../../knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(config);

const get = async(id) => {
  try {
    return await knex('incidents')
      .select().where('id', id);
  } catch(err) {
    console.error(err);
  }
};

module.exports = {
  get
};
