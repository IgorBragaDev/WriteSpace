const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
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
        timestamps: true,
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



module.exports = User;
