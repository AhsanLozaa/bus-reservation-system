import models from "../models/index.js";
const { BusSchedule, RouteStop, BusRoute, Bus } = models;

import { Op } from "sequelize";

export const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.findAll();
    return res.status(200).json(buses);
  } catch (error) {
    console.error("Get all buses error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createBus = async (req, res) => {
  try {
    const { name, plate_number, total_seats } = req.body;

    if (!name || !plate_number || !total_seats) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBus = await Bus.create({
      name,
      plate_number,
      total_seats,
    });

    return res.status(201).json(newBus);
  } catch (error) {
    console.error("Create bus error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAvailableSchedules = async (req, res) => {
  try {
    const { from_place_id, to_place_id, date } = req.query;

    const schedules = await BusSchedule.findAll({
      where: { date },
      include: [
        {
          model: BusRoute,
          as: "route",
          include: [
            {
              model: RouteStop,
              as: "stops",
              where: {
                place_id: { [Op.in]: [from_place_id, to_place_id] },
              },
              required: true,
            },
          ],
        },
        { model: Bus, as: "bus" },
      ],
    });

    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
