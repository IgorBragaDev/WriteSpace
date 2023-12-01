const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class Methodology extends Model {
  static init(sequelize) {
    super.init(
      {
        text: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Categories",
        tableName: "categories",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "category_id" });
  }
}

module.exports = Methodology;
