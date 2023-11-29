const sequelize = require("sequelize")
const connectionDatabase = require("../config/database")
const User = require("../App/models/User")

const models = [User]
class Database{
    constructor(){
        this.init()
    }

    async init(){
        try {
            await sequelize.authenticate();
            console.log("Conexão bem-sucedida.");
            await sequelize.sync();
          } catch (error) {
            console.error("Erro ao conectar ao banco de dados:", error);
          } finally {
            await sequelize.close();
          }
    
}
}

module.exports = Database