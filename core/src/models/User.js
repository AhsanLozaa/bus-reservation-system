import { v4 as uuidv4 } from "uuid";

export const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      mobile_number: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      deleted_at: DataTypes.DATE,
    },
    {
      timestamps: true,
      paranoid: true,
      underscored: true,
      tableName: "users",
    }
  );
  return User;
};
