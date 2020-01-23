// this function is run whenever we use the knex migrate:latest command, assuming that this has not already run and there are no newer migrations
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id'); // increments will by default give the id column all the needed fields such as auto-increment, not nullable, unique
      tbl.string('VIN', 17).unique().notNullable(); // a cars VIN number should be only 17 digits, unique, and must exists for the table
      tbl.string('make', 128).notNullable(); // the make of the car
      tbl.string('model', 128).notNullable(); // the model of the car
      tbl.integer('mileage').notNullable(); // mileage

      // unlike above, these columns will not be required
      tbl.string('transmissionType', 128);
      tbl.string('titleStatus', 128);
  })
};

// this function is run whenever we use the knex migrate:rollback command, it basically needs to undo what the up function does
// since the up command above create a new table. We should remove the table here
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
