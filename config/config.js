require("dotenv").config();
const env = process.env;

module.exports = {
  development: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: "webBoard",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: "webBoard",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: "webBoard",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false
  }
};
