// routes/place.routes.js
import express from "express";
import { createPlace, getAllPlaces } from "../controllers/place.controller.js";

const router = express.Router();

router.post("/", createPlace); // Add a new place
router.get("/", getAllPlaces); // Get all places

export default router;
