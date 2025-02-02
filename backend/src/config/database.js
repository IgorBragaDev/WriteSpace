require("dotenv").config();
module.exports = {
  dialect: "postgres",
  host: process.env.HOSTNAME,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
  define: {
    timestamps: true,
  },
};
