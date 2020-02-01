//title seeds as 001, because they are loaded by alpha-numeric order

exports.seed = function(knex) {
  //deletes current entries, and resets info
  return knex("cars")
    .truncate()
    .then(function() {
      //inserts seed entries
      return knex("cars").insert([
        {
          VIN: "45AS6D5F4ASDF5446",
          make: "FORD",
          model: "F150",
          mileage: 50000,
          transmission: "Manual",
          title: "Salvage"
        },
        {
          VIN: "12345678901234567",
          make: "CHEVY",
          model: "Impala",
          mileage: 46874,
          transmission: "Manual",
          title: "Clean"
        },
        {
          VIN: "7Q5ED2C2A1DF8W4W3",
          make: "TOYOTA",
          model: "Corolla",
          mileage: 4657,
          title: "Good"
        },
        {
          VIN: "Q2D1F5A7X2A3DCV1S",
          make: "SATURN",
          model: "SForTwo",
          mileage: 12356,
          transmission: "Automatic"
        },
        {
          VIN: "98S5D3A21D4F7A9W5",
          make: "GMC",
          model: "Yukon",
          mileage: 523466,
          transmission: "Automatic",
          title: "Good"
        },
        {
          VIN: "5A5A5A54FD65DF79A",
          make: "LEXUS",
          model: "LS",
          mileage: 523455435,
          transmission: "Automatic",
          title: "Good"
        }
      ]);
    });
};

/*
exports.seed = function(knex){
    return knex("cars").truncate()

    return knex('cars').insert([
        {}//details...}
    ])
}
*/
