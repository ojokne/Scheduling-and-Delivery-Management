const express = require("express");
const authController = require("../controllers/authController");

const app = express.Router();

app.post("/login", authController.loginController);
app.post("/logout", authController.logoutController);
app.get("/check_auth", authController.checkAuth);

module.exports = app;
