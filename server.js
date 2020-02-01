const express = require("express");
const helmet = require("helmet");
console.log("server.js...");

const carRouter = require("./routers/routers.jsx");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

server.use(helmet());
server.use(express.json());
server.use("/api/cars", carRouter);

module.exports = server;
