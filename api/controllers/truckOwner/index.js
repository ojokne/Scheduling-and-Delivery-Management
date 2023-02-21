const signup = require("./signup");
const addTruck = require("./addTruck");
const getTrucks = require("./getTrucks");

const truckOwnerControllers = {
  signup,
  addTruck,
  getTrucks,
};

module.exports = truckOwnerControllers;
