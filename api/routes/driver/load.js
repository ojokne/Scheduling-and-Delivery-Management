const express = require("express");
const passport = require("passport");

const { driverControllers } = require("../../controllers");

const app = express.Router();

app.get(
  "/driver/load",
  passport.authenticate("jwt", { session: false }),
  driverControllers.load
);

module.exports = app;
