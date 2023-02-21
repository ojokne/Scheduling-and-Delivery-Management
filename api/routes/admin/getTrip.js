const express = require("express");
const { adminControllers } = require("../../controllers");

const app = express.Router();

app.get("/admin/trip/:orderId", adminControllers.getTrip);

module.exports = app;
