const knex = require("knex");
const config = require("../knexfile.js");

const db = knex(config.development);
// in "knexfile.js", we are implementing "developments"

module.exports = db;
