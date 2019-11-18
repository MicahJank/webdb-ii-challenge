
exports.up = function(knex) {
    return knex.schema.createTable('car-sales', tbl => {
        tbl.integer('CarID').references('id').inTable('cars');
        tbl.integer('Price').notNullable();
        tbl.boolean('Sold').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car-sales');
};
