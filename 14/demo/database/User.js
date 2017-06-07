const bookshelf = require('./bookshelf');

// Model.extend([prototypeProperties], [classProperties])
const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  log() {
    console.log(`Email: ${this.attributes.email}`);
  },
});

module.exports = User;
