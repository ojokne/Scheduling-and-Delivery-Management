const express = require("express");
const passport = require("passport");
const { adminControllers } = require("../../controllers");

const app = express.Router();

app.get(
  "/admin/trip/:orderId",
  passport.authenticate("jwt", { session: false }),
  adminControllers.getTrip
);

module.exports = app;
