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
        modelName: "Methodology",
        tableName: "methodology",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "category_id" });
  }
}

module.exports = Methodology;
