const express = require("express");
const { adminControllers } = require("../../controllers");
const app = express.Router();

app.put("/admin/confirm/:orderId", adminControllers.confirm);
module.exports = app;
