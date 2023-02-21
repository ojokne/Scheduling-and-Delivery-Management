const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Truck = sequelize.define(
  "Truck",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    regNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING(24),
      allowNull: false,
    },
    truckOwnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Truck;
