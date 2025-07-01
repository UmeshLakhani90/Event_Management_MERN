const express = require("express");
const organizerController = require("../controllers/organizerController");
const authenticateMiddleware = require('../middleware/authenticateMiddleware')
const organizerRouter = express.Router();

organizerRouter.use(authenticateMiddleware.authenticate);

organizerRouter.route("/").post(organizerController.add);
organizerRouter.route("/").get(organizerController.get_all);
organizerRouter.route("/:id").get(organizerController.get_by_id);
organizerRouter.route("/:id").put(organizerController.update);
organizerRouter.route("/:id").delete(organizerController.delete_by_id);

module.exports = organizerRouter;