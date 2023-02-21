const signup = require("./signup");
const confirm = require("./confirm");
const schedule = require("./schedule");
const getOrder = require("./getOrder");
const getOrders = require("./getOrders");
const getTrip = require("./getTrip");
const getTrips = require("./getTrips");
const getData = require("./getData");

const adminServices = {
  signup,
  confirm,
  schedule,
  getOrder,
  getOrders,
  getTrip,
  getTrips,
  getData,
};

module.exports = adminServices;
