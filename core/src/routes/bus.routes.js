import express from "express";
import {
  getAvailableSchedules,
  createBus,
  getAllBuses,
} from "../controllers/bus.controller.js";

const router = express.Router();

// Existing schedule route
router.get("/schedules", getAvailableSchedules); // ?from_place_id=1&to_place_id=2&date=2025-04-16

// New bus routes
router.post("", createBus); // Add new bus
router.get("", getAllBuses); // Get all buses

export default router;
