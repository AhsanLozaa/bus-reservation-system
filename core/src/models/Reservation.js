import { v4 as uuidv4 } from "uuid";

export const Reservation = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
      user_id: DataTypes.UUID,
      bus_schedule_id: DataTypes.UUID,
      from_place_id: DataTypes.UUID,
      to_place_id: DataTypes.UUID,
      seat_number: DataTypes.STRING,
      status: DataTypes.ENUM("booked", "cancelled", "completed"),
      deleted_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      tableName: "reservations",
    }
  );

  return Reservation;
};
