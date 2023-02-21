const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Trip = sequelize.define(
  "Trip",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    truckId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scheduleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isLoaded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    hasArrivedAtPickupLocation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isDispatched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    hasArrivedAtDestination: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isDelivered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    loadedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dispatchedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    pickupArrivalTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    destinationArrivalTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    offLoadedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deliveredAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Trip;
