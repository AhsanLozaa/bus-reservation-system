import { Reservation } from "../models/Reservation.js";

export const createReservation = async (req, res) => {
  try {
    const {
      user_id,
      bus_schedule_id,
      from_place_id,
      to_place_id,
      seat_number,
    } = req.body;

    // You might want to check if seat is already booked here
    const reservation = await Reservation.create({
      user_id,
      bus_schedule_id,
      from_place_id,
      to_place_id,
      seat_number,
      status: "booked",
    });

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
