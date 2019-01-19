
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl.string('description', 255).notNull();
      tbl.string('notes', 255);
      tbl.boolean('complete').notNull();
      tbl.integer('project_id').unsigned().references('id').inTable('projects');
      tbl.timestamps(true, true);
    });
  };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
