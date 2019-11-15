// Update with your config settings.
// knexfile.js needs to be at the ROOT FOLDER for the project!

module.exports = {

  development: {
    client: 'sqlite3', // the kind of database knex will work with
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true, // helps prevent errors
  },

  migrations: {
    directory: './data/migrations'
  },

  seeds: {
    directory: './data/seeds'
  }

};
