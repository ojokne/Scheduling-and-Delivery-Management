const express = require("express");
const passport = require("passport");
const { truckOwnerControllers } = require("../../controllers");

const app = express.Router();

app.post(
  "/truck_owner/add_truck/:truckOwnerId",
  passport.authenticate("jwt", { session: false }),

  truckOwnerControllers.addTruck
);

module.exports = app;
