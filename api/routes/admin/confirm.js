const express = require("express");
const passport = require("passport");
const { adminControllers } = require("../../controllers");
const app = express.Router();

app.put(
  "/admin/confirm/:orderId",
  passport.authenticate("jwt", { session: false }),
  adminControllers.confirm
);
module.exports = app;
