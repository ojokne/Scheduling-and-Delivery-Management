const express = require("express");
const { truckOwnerControllers } = require("../../controllers");

const app = express.Router();

app.post("/truck_owner/signup", truckOwnerControllers.signup);

module.exports = app;
