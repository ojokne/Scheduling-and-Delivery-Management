const express = require("express");
const passport = require("passport");
const { adminControllers } = require("../../controllers");

const app = express.Router();

app.get(
  "/admin/trips",
  passport.authenticate("jwt", { session: false }),
  adminControllers.getTrips
);

module.exports = app;
