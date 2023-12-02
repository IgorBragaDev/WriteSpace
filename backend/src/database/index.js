const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../App/models/User");
const Categories = require("../App/models/Categories");
const Methodology = require("../App/models/Cards");
const models = [User, Categories, Methodology];

class Database {
  constructor() {
    this.connection = new Sequelize(dbConfig);
    this.init();
  }

  async init() {
    try {
      models.forEach((element) => {
        element.init(this.connection);
        if (element.associate) {
          element.associate(this.connection.models);
        }
      });
      await this.connection.sync();
    } catch (error) {
      console.error("Erro ao conectar ao banco de dados:", error);
    }
  }
}

const database = new Database();

module.exports = database.connection;
