import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

import { User } from "./User.js";
import { Bus } from "./Bus.js";
import { BusRoute } from "./BusRoute.js";
import { BusSchedule } from "./BusSchedule.js";
import { Place } from "./Place.js";
import { Reservation } from "./Reservation.js";
import { Seat } from "./Seat.js";
import { RouteStop } from "./RouteStop.js"; // if using

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

// Initialize models
const models = {
  User: User(sequelize, DataTypes),
  Bus: Bus(sequelize, DataTypes),
  BusRoute: BusRoute(sequelize, DataTypes),
  BusSchedule: BusSchedule(sequelize, DataTypes),
  Place: Place(sequelize, DataTypes),
  Reservation: Reservation(sequelize, DataTypes),
  Seat: Seat(sequelize, DataTypes),
  RouteStop: RouteStop(sequelize, DataTypes),
};

// Define associations here if any (optional)

export { sequelize };
export default models;
