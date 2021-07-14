'use strict';

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'incident_report',
      user: 'superuser',
      password: 'KDtrvwXmKyvFbJmCKm'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
  }
};
