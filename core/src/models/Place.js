import { v4 as uuidv4 } from "uuid";

export const Place = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    "Place",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
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
