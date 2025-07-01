const { Router: expressRouter } = require("express");
const router = expressRouter();

// auth routes
const authRouter = require("./authRoutes");
router.use("/auth", authRouter);

// user routes
const userRouter = require("./userRoutes");
router.use("/user", userRouter);

// venue routes
const venueRouter = require("./venueRoutes");
router.use("/venue", venueRouter);

// organizer routes
const organizerRouter = require("./organizerRoutes");
router.use("/organizer", organizerRouter);

// ticket routes
const ticketRouter = require("./ticketRoutes");
router.use("/ticket", ticketRouter);

// event routes
const eventRouter = require("./eventRoutes");
router.use("/event", eventRouter);

module.exports = router;