const express = require("express");
const passport = require("passport");
const { adminControllers } = require("../../controllers");

const app = express.Router();

app.get(
  "/admin/order/:orderId",
  passport.authenticate("jwt", { session: false }),
  adminControllers.getOrder
);

module.exports = app;
