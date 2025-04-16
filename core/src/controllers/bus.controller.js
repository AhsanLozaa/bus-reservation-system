import { BusSchedule } from "../models/User.js";
import { RouteStop } from "../models/RouteStop.js";
import { BusRoute } from "../models/BusRoute.js";
import { Bus } from "../models/Bus.js";
// import { Place } from "../models/Place.js";

import { Op } from "sequelize";

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
