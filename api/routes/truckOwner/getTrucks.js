const express = require("express");
const { truckOwnerControllers } = require("../../controllers");

const app = express.Router();

app.get("/truck_owner/trucks/:truckOwnerId", truckOwnerControllers.getTrucks);

module.exports = app;
