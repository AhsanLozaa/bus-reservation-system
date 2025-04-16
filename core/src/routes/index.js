import express from "express";
import userRoutes from "./user.routes.js";
import busRoutes from "./bus.routes.js";
import reservationRoutes from "./reservation.routes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/buses", busRoutes);
router.use("/reservations", reservationRoutes);

export default router;
