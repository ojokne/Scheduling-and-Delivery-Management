const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Delivery = sequelize.define(
  "Delivery",
  {
    deliveryId: {
      type: DataTypes.STRING(64),
      primaryKey: true,
    },
    scheduleDate: {
      type: DataTypes.DATEONLY,
    },
    isDelivered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    clientInstructions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Delivery;
