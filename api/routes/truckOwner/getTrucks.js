const express = require("express");
const passport = require("passport");

const { truckOwnerControllers } = require("../../controllers");

const app = express.Router();

app.get(
  "/truck_owner/trucks/:truckOwnerId",
  passport.authenticate("jwt", { session: false }),
  truckOwnerControllers.getTrucks
);

module.exports = app;
