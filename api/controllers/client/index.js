const signup = require("./signup");
const order = require("./order");
const getOrders = require("./getOrders");

const clientControllers = {
  signup,
  order,
  getOrders,
};

module.exports = clientControllers;
