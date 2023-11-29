module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: process.env.USERNAME,
  pasword: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
};
