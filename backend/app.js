
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const compression = require("compression");
const dataBase = require("./src/database/index");

class App {
  constructor() {

    this.database = dataBase;
    this.start();
    this.server = express();
    this.middlewares();
    this.routes();

  }

  middlewares() {
    this.server.use(cors());
    this.server.use(compression());
    this.server.use(express.json({ limit: "500mb" }));
  }

  routes() {
    this.server.use(routes);
  }
  async start() {

    try {
      await this.database.authenticate();
      console.log("Conexão com o banco de dados estabelecida com sucesso.");
    } catch (error) {
      console.error("Erro ao conectar ao banco de dados:", error);
    }

  }
}

module.exports = new App().server;
