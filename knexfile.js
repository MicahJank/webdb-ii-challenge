// Update with your config settings.
// knexfile.js needs to be at the ROOT FOLDER for the project!

module.exports = {

  development: {
    client: 'pg', // the kind of database knex will work with
    connection: {
      // filename: './data/car-dealer.db3'
      host: 'localhost',
      user: 'testUser',
      password: 'password123',
      database: 'testDB'
    },
    useNullAsDefault: true, // helps prevent errors
    migrations: {
      directory: './data/migrations'
    },
  
    seeds: {
      directory: './data/seeds'
    }
  },
  
};