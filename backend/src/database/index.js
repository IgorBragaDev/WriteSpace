console.log("Início do arquivo connection.js");

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);
const User = require("../App/models/User");
const Categories = require("../App/models/Categories");
const Methodology = require("../App/models/methodology");

connection.sync();
User.init(connection);
Categories.init(connection);
Methodology.init(connection);

Categories.associate(connection.models);
Methodology.associate(connection.models);
module.exports = connection;

// const models = [User];
// class Database {
//   constructor() {
//     this.connection = new Sequelize(dbConfig);
//     this.init();
//   }

//   async init() {
//     try {
//       await this.connection.authenticate();
//       console.log("Conexão bem-sucedida.");
//       User.init(this.connection)
//       await this.connection.sync();
//     } catch (error) {
//       console.error("Erro ao conectar ao banco de dados:", error);
//     }
//   }

// }
