const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../../database");

class User extends Model {
  async setPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    this.setDataValue("password", hashedPassword);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Adicione mais campos conforme necessário
  },
  {
    sequelize,
    modelName: "User",
    hooks: {
      beforeCreate: async (user) => {
        await user.setPassword(user.password);
      },
      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          await user.setPassword(user.password);
        }
      },
    },
  }
);
console.log(User === sequelize.models.User);
module.exports = User;