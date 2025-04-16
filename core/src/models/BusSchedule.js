// models/BusSchedule.js
export const BusSchedule = (sequelize, DataTypes) => {
  const BusSchedule = sequelize.define(
    "BusSchedule",
    {
      bus_id: DataTypes.INTEGER,
      route_id: DataTypes.INTEGER,
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
  return BusSchedule;
};
