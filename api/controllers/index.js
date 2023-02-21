const adminControllers = require("./admin");
const clientControllers = require("./client");
const driverControllers = require("./driver");
const truckOwnerControllers = require("./truckOwner");

const controllers = {
  adminControllers,
  clientControllers,
  driverControllers,
  truckOwnerControllers,
};

module.exports = controllers;
