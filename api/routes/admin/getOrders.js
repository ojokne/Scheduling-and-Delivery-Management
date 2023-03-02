const express = require("express");
const passport = require("passport");
const { adminControllers } = require("../../controllers");

const app = express.Router();

app.get(
  "/admin/orders",
  passport.authenticate("jwt", { session: false }),
  adminControllers.getOrders
);

module.exports = app;
