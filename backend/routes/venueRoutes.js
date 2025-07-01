const express = require("express");
const venueController = require("../controllers/venueController");
const authenticateMiddleware = require('../middleware/authenticateMiddleware')
const venueRouter = express.Router();

venueRouter.use(authenticateMiddleware.authenticate);

venueRouter.route("/").post(venueController.add);
venueRouter.route("/").get(venueController.get_all);
venueRouter.route("/:id").get(venueController.get_by_id);
venueRouter.route("/:id").put(venueController.update);
venueRouter.route("/:id").delete(venueController.delete_by_id);

module.exports = venueRouter;