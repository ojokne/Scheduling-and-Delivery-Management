const express = require("express");
const { adminControllers } = require("../../controllers");
const app = express.Router();

app.post("/admin/signup", adminControllers.signup);
module.exports = app;
