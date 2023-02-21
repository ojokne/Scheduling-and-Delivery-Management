const express = require("express");
const { clientControllers } = require("../../controllers");

const app = express.Router();

app.post("/client/order", clientControllers.order);

module.exports = app;
