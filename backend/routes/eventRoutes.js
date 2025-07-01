const express = require("express");
const eventController = require("../controllers/eventController");
const authenticateMiddleware = require('../middleware/authenticateMiddleware')
const eventRouter = express.Router();

eventRouter.use(authenticateMiddleware.authenticate);

eventRouter.route("/").post(eventController.add);
eventRouter.route("/").get(eventController.get_all);
eventRouter.route("/:id").get(eventController.get_by_id);
eventRouter.route("/:id").put(eventController.update);
eventRouter.route("/:id").delete(eventController.delete_by_id);

module.exports = eventRouter;