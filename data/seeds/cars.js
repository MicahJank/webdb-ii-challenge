
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').insert([
    {VIN: '1GBJK39DX6E165432', make: 'Chevrolet', model: 'Silverado', mileage: 50000, transmissionType: 'manual', titleStatus: ''},
    {VIN: 'JH4KA4550JC048596', make: 'Acura', model: 'Legend', mileage: 88000, transmissionType: 'auto', titleStatus: ''},
    {VIN: '1MEBM62F2JH693379', make: 'Mercury', model: 'Cougar', mileage: 25000, transmissionType: 'auto', titleStatus: ''},
    {VIN: 'JH4DB7650RS000250', make: 'Acura', model: 'Integra', mileage: 90000, transmissionType: 'auto', titleStatus: ''},
  ]);
};
