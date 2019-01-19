
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actionscontexts', tbl => {
        tbl.increments();
        tbl.integer('actions_id').unsigned().references('id').inTable('actions').notNull();
        tbl.integer('contexts_id').unsigned().references('id').inTable('contexts').notNull();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actionscontexts');
};
