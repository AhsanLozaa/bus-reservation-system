import express from "express";
import { getAvailableSchedules } from "../controllers/bus.controller.js";

const router = express.Router();

router.get("/schedules", getAvailableSchedules); // ?from_place_id=1&to_place_id=2&date=2025-04-16

export default router;
