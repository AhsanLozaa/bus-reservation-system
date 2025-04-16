// models/RouteStop.js
import { v4 as uuidv4 } from "uuid";

export const RouteStop = (sequelize, DataTypes) => {
  const RouteStop = sequelize.define(
    "RouteStop",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
      route_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      place_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      stop_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stop_time: DataTypes.STRING,
      deleted_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      tableName: "route_stops",
    }
  );
  return RouteStop;
};
