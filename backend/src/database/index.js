const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../App/models/User");

const connection = new Sequelize(dbConfig)
User.init(connection)
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

module.exports = connection
