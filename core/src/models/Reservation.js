// models/Reservation.js
export const Reservation = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      user_id: DataTypes.INTEGER,
      bus_schedule_id: DataTypes.INTEGER,
      from_place_id: DataTypes.INTEGER,
      to_place_id: DataTypes.INTEGER,
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
