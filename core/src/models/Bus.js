// models/Bus.js
export const Bus = (sequelize, DataTypes) => {
  const Bus = sequelize.define(
    "Bus",
    {
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
