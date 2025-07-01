const express = require("express");
const ticketController = require("../controllers/ticketController");
const authenticateMiddleware = require('../middleware/authenticateMiddleware')
const ticketRouter = express.Router();

ticketRouter.use(authenticateMiddleware.authenticate);

ticketRouter.route("/").post(ticketController.add);
ticketRouter.route("/").get(ticketController.get_all);
ticketRouter.route("/:id").get(ticketController.get_by_id);
ticketRouter.route("/:id").put(ticketController.update);
ticketRouter.route("/:id").delete(ticketController.delete_by_id);

module.exports = ticketRouter;