exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increaments("id");
    table
      .string("VIN", 17) //String under VIN with 17 characters
      .notNull() //can't be blank/null
      .unique(); //can't repeat
    table.text("make").notNull();
    table.text("model").notNull();
    table.float("mileage").notNull();
    // table.text("transmission").defaultTo("unknown");
    // table.text("title").defaultTo("unknown");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
