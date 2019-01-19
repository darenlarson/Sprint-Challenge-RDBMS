
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNull();
      tbl.string('description', 255).notNull();
      tbl.boolean('complete').notNull();
      tbl.timestamps(true, true);
  
      tbl.unique('name', 'uq_dishes_name');
    });
  };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
