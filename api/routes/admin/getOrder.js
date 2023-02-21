const express = require("express");
const { adminControllers } = require("../../controllers");

const app = express.Router();

app.get("/admin/order/:orderId", adminControllers.getOrder);

module.exports = app;
