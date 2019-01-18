
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Answer essay questions', notes: "this should be easy", complete: false, project_id: 1},
        {description: 'Build server', notes: "what is a server?", complete: true, project_id: 1},
        {description: 'Pull request', notes: "Use the new lambda git workflow", complete: false, project_id: 1}
      ]);
    });
};
