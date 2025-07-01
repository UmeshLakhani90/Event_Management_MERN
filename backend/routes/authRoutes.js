const express = require("express");
const authController = require("../controllers/authController")
const authRouter = express.Router();

//Define routes
authRouter.route("/register").post(authController.register);
authRouter.route("/login").post(authController.login);

module.exports = authRouter;