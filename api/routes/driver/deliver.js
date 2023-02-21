const express = require("express");
const { driverControllers } = require("../../controllers");

const app = express.Router();

app.get("/driver/deliver", driverControllers.deliver);

module.exports = app;
