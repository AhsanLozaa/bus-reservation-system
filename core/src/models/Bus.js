import { v4 as uuidv4 } from "uuid";

export const Bus = (sequelize, DataTypes) => {
  const Bus = sequelize.define(
    "Bus",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      plate_number: DataTypes.STRING,
      total_seats: DataTypes.INTEGER,
      deleted_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      tableName: "buses",
    }
  );
  return Bus;
};
