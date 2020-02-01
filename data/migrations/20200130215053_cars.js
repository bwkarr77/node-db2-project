exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments("id");
    tbl
      .string("VIN", 17) //String under VIN with 17 characters
      .notNullable() //can't be blank/null
      .unique(); //can't repeat
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.float("mileage", 128).notNullable();
    tbl.text("transmission").default("unknown");
    tbl.text("title").default("unknown");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cars");
};
