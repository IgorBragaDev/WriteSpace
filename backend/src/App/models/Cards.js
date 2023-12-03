const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        text: DataTypes.STRING,
        name: DataTypes.STRING
      },
      {
        sequelize,
        modelName: "Card",
        tableName: "cards",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "category_id" });
  }
}

module.exports = Card;
