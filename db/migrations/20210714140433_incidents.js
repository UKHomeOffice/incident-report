
exports.up = (knex) => {
  return knex.schema.createTable('incidents', table => {
    table.string('id').notNullable();
    table.string('incident').notNullable();
    table.string('user_email').notNullable();
    table.string('manager_email').notNullable();
    table.string('uuid_email_link');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('incidents');
};
