
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        {id: 1, user_id: 1, description: 'event description', date_of_event: 08/01/2020},
        {id: 2, user_id: 2, description: 'event description', date_of_event: 09/01/2020},
        {id: 3, user_id: 3, description: 'event description', date_of_event: 10/01/2020}
      ]);
    });
};
