import { v4 as uuidv4 } from "uuid";

export const BusRoute = (sequelize, DataTypes) => {
  const BusRoute = sequelize.define(
    "BusRoute",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      total_duration: DataTypes.STRING,
      deleted_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      tableName: "bus_routes",
    }
  );
  return BusRoute;
};
