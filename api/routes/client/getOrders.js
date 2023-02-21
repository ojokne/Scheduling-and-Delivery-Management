const express = require("express");
const { clientControllers } = require("../../controllers");

const app = express.Router();

app.get("/client/orders/:clientId", clientControllers.getOrders);

module.exports = app;
