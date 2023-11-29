const { Sequelize, sequelize } = require("sequelize");
const connectionDatabase = require("../config/database");
const User = require("../App/models/User");

const models = [User];
const databaseConnection = new Sequelize(connectionDatabase);

class Database {
  constructor() {
    this.init();
  }

  async init() {
    try {
      await databaseConnection.authenticate();
      console.log("Conexão bem-sucedida.");
      await databaseConnection.sync();
    } catch (error) {
      console.error("Erro ao conectar ao banco de dados:", error);
    } finally {
      await databaseConnection.close();
    }
  }
}

module.exports = Database;
