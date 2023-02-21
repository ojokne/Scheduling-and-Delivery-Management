const adminServices = require("./admin");
const clientServices = require("./client");
const driverServices = require("./driver");
const truckOwnerServices = require("./truckOwner");

const services = {
  adminServices,
  clientServices,
  driverServices,
  truckOwnerServices,
};

module.exports = services;
