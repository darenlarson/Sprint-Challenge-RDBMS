
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contexts', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNull().unique();
    });
  };
  
exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('contexts');
};
