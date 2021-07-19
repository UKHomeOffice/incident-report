/* eslint-disable no-process-env, camelcase, no-console */
'use strict';

const config = require('../../../knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(config);

const createIncident = async(data) => {
  try {
    await knex('incidents').insert({
      id: data['incident-id'],
      incident: data.incident,
      user_email: data['user-email'],
      manager_email: data['manager-email']
    })
    console.log(`=====> record ${data['incident-id']} saved to incidents_report db`)
  } catch(err) {
    console.error(err);
  }
};

const getAll = async() => {
  try {
    return await knex('incidents')
      .select()
  } catch(err) {
    console.error(err);
  }
};

const get = async(id) => {
  try {
    return await knex('incidents')
      .select().where('id', id)
  } catch(err) {
    console.error(err);
  }
};

const update = async(data) => {
  try {
    return await knex(data.table)
      .where('id', data.id).update({
        manager_comments: data['manager-comments'],
        complete: data.complete
      })
  } catch(err) {
    console.error(err);
  }
};

module.exports = {
  createIncident,
  getAll,
  get,
  update
};
