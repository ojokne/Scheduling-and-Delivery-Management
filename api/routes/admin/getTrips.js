const express = require("express");
const { adminControllers } = require("../../controllers");

const app = express.Router();

app.get("/admin/trips", adminControllers.getTrips);

module.exports = app;
