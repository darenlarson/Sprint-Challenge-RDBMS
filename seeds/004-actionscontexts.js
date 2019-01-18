
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actionscontexts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actionscontexts').insert([
        {actions_id: 1, contexts_id: 1},
        {actions_id: 1, contexts_id: 2},
        {actions_id: 2, contexts_id: 1},
        {actions_id: 2, contexts_id: 3}
      ]);
    });
};
