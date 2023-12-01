const { Sequelize } = require("sequelize");
const connectionDatabase = require("../config/database");
const User = require("../App/models/User");
const Category = require("../App/models/Categories");

const models = [User, Category];
class Database {
  constructor() {
    this.connection = new Sequelize(connectionDatabase);
    this.init();
  }

  async init() {
    try {
      await this.connection.authenticate();
      console.log("Conexão bem-sucedida.");

      models.forEach((model) => {
        model.init(this.connection);
        if (model.associate) {
          model.associate(this.connection.models);
        }
      });
      // Inicializar os modelos
      // models.forEach((model) => model.init(this.connection));
      // models.forEach(async (model) => {
      //   console.log(model)
      // try {
      //   const instance = new model(); // Crie uma instância do modelo
      //   await instance.init(
      //     this.connection
      //   );
      //   if (instance.constructor.associate) {
      //     instance.constructor.associate(this.connection.models);
      //   }
      // } catch (error) {
      //   console.error("Erro ao inicializar modelo:", error);
      // }
      // });

      // // Aplicar associações, se houver
      // models.forEach((model) => {
      //   if (model.associate) {
      //     model.associate(this.connection.models);
      //   }
      // });

      // // Sincronizar o modelo com o banco de dados
      await this.connection.sync();
    } catch (error) {
      console.error("Erro ao conectar ao banco de dados:", error);
    }
  }
}

// Exportar apenas a instância da conexão, não a instância da classe
module.exports = new Database().connection;
