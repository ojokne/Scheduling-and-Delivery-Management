const express = require("express");
const passport = require("passport");
const { clientControllers } = require("../../controllers");

const app = express.Router();

app.get(
  "/client/orders/:clientId",
  passport.authenticate("jwt", { session: false }),
  clientControllers.getOrders
);

module.exports = app;
