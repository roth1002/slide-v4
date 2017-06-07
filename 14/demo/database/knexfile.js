// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'test_db',
    user: 'test_user',
    password: process.env.PWD,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
