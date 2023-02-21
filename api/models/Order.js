const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isCancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isInvoiceSent: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: false,
    },
    deliveryInstructions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    amountQuoted: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    amountPaid: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },

    pickupLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productWeight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    proposedScheduleDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Order;
