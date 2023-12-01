const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../../database");
class User extends Model {
  async setPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    this.setDataValue("password", hashedPassword);
  }
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
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
  }
}

User.init(sequelize);
console.log(User === sequelize.models.User);

module.exports = User;
