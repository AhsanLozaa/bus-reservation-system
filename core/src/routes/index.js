import express from "express";
import pool from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS time");
    res.json({ message: "Bus Reservation System API", time: rows[0].time });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
