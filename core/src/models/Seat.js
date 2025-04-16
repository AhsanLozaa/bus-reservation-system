// models/Seat.js
export const Seat = (sequelize, DataTypes) => {
  const Seat = sequelize.define(
    "Seat",
    {
      bus_id: DataTypes.INTEGER,
      seat_number: DataTypes.STRING,
      seat_type: DataTypes.STRING,
      deleted_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      tableName: "seats",
    }
  );
  return Seat;
};
