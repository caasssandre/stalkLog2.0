exports.up = function(knex) {
  return knex.schema.createTable('logs', table => {
    table.increments('id')
    table.string('user_id')
    table.string('description')
    table.date('date_of_event')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('logs')
}