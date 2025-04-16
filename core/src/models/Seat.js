import { v4 as uuidv4 } from "uuid";

export const Seat = (sequelize, DataTypes) => {
  const Seat = sequelize.define(
    "Seat",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
      bus_id: DataTypes.UUID, // Assuming bus_id is also a UUID now
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
