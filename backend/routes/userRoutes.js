const express = require("express");
const userController = require("../controllers/userController");
const authenticateMiddleware = require('../middleware/authenticateMiddleware')
const userRouter = express.Router();

userRouter.use(authenticateMiddleware.authenticate);

userRouter.route("/").post(userController.add);
userRouter.route("/").get(userController.get_all);
userRouter.route("/:id").get(userController.get_by_id);
userRouter.route("/:id").put(userController.update);
userRouter.route("/:id").delete(userController.delete_by_id);

module.exports = userRouter;