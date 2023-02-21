const express = require("express");
const { adminControllers } = require("../../controllers");
const app = express.Router();

app.post("/admin/schedule/:orderId", adminControllers.schedule);
module.exports = app;
