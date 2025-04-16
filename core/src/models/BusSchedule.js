import { v4 as uuidv4 } from "uuid";

export const BusSchedule = (sequelize, DataTypes) => {
  const BusSchedule = sequelize.define(
    "BusSchedule",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
      bus_id: {
        type: DataTypes.UUID, // UUID to match the Bus model's ID type
        allowNull: false,
      },
      route_id: {
        type: DataTypes.UUID, // UUID to match the BusRoute model's ID type
        allowNull: false,
      },
      date: DataTypes.DATEONLY,
      start_time: DataTypes.TIME,
      end_time: DataTypes.TIME,
      deleted_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      tableName: "bus_schedules",
    }
  );

  // Define associations
  BusSchedule.associate = (models) => {
    BusSchedule.belongsTo(models.Bus, { foreignKey: "bus_id" });
    BusSchedule.belongsTo(models.BusRoute, { foreignKey: "route_id" });
  };

  return BusSchedule;
};
