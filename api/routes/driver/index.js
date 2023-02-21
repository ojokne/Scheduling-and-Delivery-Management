const express = require("express");
const signup = require("./signup");
const load = require("./load");
const deliver = require("./deliver");
const getTrips = require("./getTrips");

const app = express.Router();

app.use(signup);
app.use(load);
app.use(deliver);
app.use(getTrips);

module.exports = app;
