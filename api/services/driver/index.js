const signup = require("./signup");
const load = require("./load");
const deliver = require("./deliver");
const getTrips = require("./getTrips");

const driverServices = {
  signup,
  load,
  deliver,
  getTrips,
};

module.exports = driverServices;
