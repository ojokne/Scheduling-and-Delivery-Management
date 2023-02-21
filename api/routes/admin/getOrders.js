const express = require("express");
const { adminControllers } = require("../../controllers");

const app = express.Router();

app.get("/admin/orders", adminControllers.getOrders);

module.exports = app;
