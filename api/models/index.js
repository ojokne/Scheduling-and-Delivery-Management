const Admin = require("./Admin");
const Client = require("./Client");
const Order = require("./Order");
const Driver = require("./Driver");
const Trip = require("./Trip");
const Truck = require("./Truck");
const TruckOwner = require("./TruckOwner");

const createAssociations = () => {
  Client.hasMany(Order, {
    foreignKey: "clientId",
  });

  Driver.hasMany(Trip, {
    foreignKey: "driverId",
  });

  Truck.hasMany(Trip, {
    foreignKey: "truckId",
  });

  TruckOwner.hasMany(Truck, {
    foreignKey: "truckOwnerId",
  });

  Order.hasOne(Trip, {
    foreignKey: "orderId",
  });
};
module.exports = {
  Client,
  Order,
  Driver,
  Admin,
  Truck,
  TruckOwner,
  Trip,
  createAssociations,
};
