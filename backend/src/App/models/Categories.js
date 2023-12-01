const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../../database");
class Categories extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Categories",
        tableName: "categories",
      }
      );
    }
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
}

module.exports = Categories;
