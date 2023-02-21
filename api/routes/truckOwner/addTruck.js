const express = require("express");
const { truckOwnerControllers } = require("../../controllers");

const app = express.Router();

app.post(
  "/truck_owner/add_truck/:truckOwnerId",
  truckOwnerControllers.addTruck
);

module.exports = app;
