const express = require("express");
const signup = require("./signup");
const addTruck = require("./addTruck");
const getTrucks = require("./getTrucks");

const app = express.Router();

app.use(signup);
app.use(addTruck);
app.use(getTrucks);

module.exports = app;
