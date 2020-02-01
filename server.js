const express = require("express");
const helmet = require("helmet");
console.log("server.js...");

const db = require("./utils/db-config.js");
const routerS = require("./routers/routers.jsx");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/accounts", routerS);

module.exports = server;
