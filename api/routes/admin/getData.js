const express = require("express");
const passport = require("passport");
const { adminControllers } = require("../../controllers");
const app = express.Router();

app.get(
  "/admin/data",
  passport.authenticate("jwt", { session: false }),
  adminControllers.getData
);
module.exports = app;
