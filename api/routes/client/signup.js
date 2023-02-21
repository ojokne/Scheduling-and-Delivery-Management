const express = require("express");
const { clientControllers } = require("../../controllers");

const app = express.Router();

app.post("/client/signup", clientControllers.signup);

module.exports = app;
