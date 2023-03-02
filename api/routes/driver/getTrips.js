const express = require("express");
const passport = require("passport");

const { driverControllers } = require("../../controllers");

const app = express.Router();

app.get(
  "/driver/trips/:driverId",
  passport.authenticate("jwt", { session: false }),
  driverControllers.getTrips
);

module.exports = app;
