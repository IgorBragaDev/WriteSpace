require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const compression = require("compression");
const dataBase = require("./src/database/index");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.database = new dataBase();
    this.initialize();
  }

  async initialize() {
    try {
      await this.database.init();
      console.log("Conexão com o banco de dados estabelecida.");
    } catch (error) {
      console.error("Erro ao inicializar a aplicação:", error);
    }
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(compression());
    this.server.use(express.json({ limit: "500mb" }));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
