// models/BusRoute.js
export const BusRoute = (sequelize, DataTypes) => {
  const BusRoute = sequelize.define(
    "BusRoute",
    {
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
