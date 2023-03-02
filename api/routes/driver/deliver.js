const express = require("express");
const passport = require("passport");
const { driverControllers } = require("../../controllers");

const app = express.Router();

app.get(
  "/driver/deliver",
  passport.authenticate("jwt", { session: false }),
  driverControllers.deliver
);

module.exports = app;
