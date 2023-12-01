const sequelize = require("../../database");
const { Model, DataTypes } = require("sequelize");

class Categories extends Model {
  static associate(models) {}
}

Categories.init(
  {
    title: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Categories",
  }
);

module.exports = Categories;
