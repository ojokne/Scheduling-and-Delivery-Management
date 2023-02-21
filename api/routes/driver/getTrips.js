const express = require("express");
const { driverControllers } = require("../../controllers");

const app = express.Router();

app.get("/driver/trips/:driverId", driverControllers.getTrips);

module.exports = app;
