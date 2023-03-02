const express = require("express");
const passport = require("passport");
const { adminControllers } = require("../../controllers");
const app = express.Router();

app.post(
  "/admin/schedule/:orderId",
  passport.authenticate("jwt", { session: false }),
  adminControllers.schedule
);
module.exports = app;
