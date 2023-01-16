if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    pool: {
      min: 0,
      max: 5,
      idle: 1000,
    },
  }
);

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database:: Connection established");
  } catch (e) {
    console.log(e);
  }
};

const sync = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database:: Tables created");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { sequelize, authenticate, sync };
