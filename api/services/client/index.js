const signup = require("./signup");
const order = require("./order");
const getOrders = require("./getOrders");

const clientServices = {
  signup,
  order,
  getOrders,
};

module.exports = clientServices;
