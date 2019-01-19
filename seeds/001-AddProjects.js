
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Spring Challenge', description: "Complete the sprint challenge for this week.", complete: false, },
        {name: 'Build house', description: "Build a new house to live in.", complete: false, },
      ]);
    });
};
