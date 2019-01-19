const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  getActions: function(id) {
    let query = db('actions as a').select('a.id', 'a.description', 'a.notes', 'a.complete');
    let contextQuery = db('contexts as c').select('*').join('actionscontexts as ac', 'ac.contexts_id', '=', 'c.id').where('c.id', '=', 'a.id');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(action => mappers.actionToBody(action, contextQuery));
    }

    return query.then(actions => {
      return actions.map(action => mappers.actionToBody(action));
    });
  },
  insert: function(action) {
    return db('actions')
      .insert(action)
      .then(([id]) => this.getActions(id));
  },
  update: function(id, changes) {
    return db('actions')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.getActions(id) : null));
  },
  remove: function(id) {
    return db('actions')
      .where('id', id)
      .del();
  },
};
