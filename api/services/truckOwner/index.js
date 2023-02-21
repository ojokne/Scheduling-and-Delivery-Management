const signup = require("./signup");
const addTruck = require("./addTruck");
const getTrucks = require("./getTrucks");

const truckOwnerServices = {
  signup,
  addTruck,
  getTrucks,
};

module.exports = truckOwnerServices;
