const express = require("express");
const passport = require("passport");
const { clientControllers } = require("../../controllers");

const app = express.Router();

app.post(
  "/client/order",
  passport.authenticate("jwt", { session: false }),
  clientControllers.order
);

module.exports = app;
