// models/Place.js
export const Place = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    "Place",
    {
      name: DataTypes.STRING,
      deleted_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      tableName: "places",
    }
  );
  return Place;
};
