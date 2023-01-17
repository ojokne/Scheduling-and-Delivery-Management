const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Client = sequelize.define("Client", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(64),
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = Client;
