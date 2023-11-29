const sequelize = require("sequelize")
const connectionDatabase = require("../config/database")


class Database{
    constructor(){
        this.init()
    }

    init(){
        this.connection = new sequelize(connectionDatabase)
    }
}