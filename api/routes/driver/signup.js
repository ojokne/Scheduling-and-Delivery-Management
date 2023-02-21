const express = require("express");
const { driverControllers } = require("../../controllers");

const app = express.Router();

app.post("/driver/signup", driverControllers.signup);

module.exports = app;
