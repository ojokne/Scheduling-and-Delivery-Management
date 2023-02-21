const express = require("express");

const adminRoutes = require("./admin");
const clientRoutes = require("./client");
const driverRoutes = require("./driver");
const authRoutes = require("./auth");
const truckOwnerRoutes = require("./truckOwner");

const app = express.Router();

app.use(authRoutes);
app.use(adminRoutes);
app.use(clientRoutes);
app.use(driverRoutes);
app.use(truckOwnerRoutes);

module.exports = app;
