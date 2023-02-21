const express = require("express");
const { driverControllers } = require("../../controllers");

const app = express.Router();

app.get("/driver/load", driverControllers.load);

module.exports = app;
