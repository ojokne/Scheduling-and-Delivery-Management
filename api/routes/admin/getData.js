const express = require("express");
const { adminControllers } = require("../../controllers");
const app = express.Router();

app.get("/admin/data", adminControllers.getData);
module.exports = app;
