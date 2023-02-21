const express = require("express");
const signup = require("./signup");
const order = require("./order");
const getOrders = require("./getOrders");

const app = express.Router();

app.use(signup);
app.use(order);
app.use(getOrders);
module.exports = app;
