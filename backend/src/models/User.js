const { Sequelize, Model, DataTypes } = require("sequelize");
const connectionDatabase = require("../config/database")

const sequelize = new Sequelize(connectionDatabase);

class User extends Model {
  static init(sequelize) {
    super.init(
        {
            name : Sequelize.STRING,
            email : Sequelize.STRING,
            password: Sequelize.STRING,
        },
        {
            sequelize,
        }
 )
  }
}
User.init(sequelize);
console.log(User === sequelize.models.User); // true



module.exports = User