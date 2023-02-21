const express = require("express");
const signup = require("./signup");
const confirm = require("./confirm");
const schedule = require("./schedule");
const getOrder = require("./getOrder");
const getOrders = require("./getOrders");
const getTrip = require("./getTrip");
const getTrips = require("./getTrips");
const getData = require("./getData");

const app = express.Router();

app.use(signup);
app.use(confirm);
app.use(schedule);
app.use(getOrder);
app.use(getOrders);
app.use(getTrip);
app.use(getTrips);
app.use(getData);

module.exports = app;
