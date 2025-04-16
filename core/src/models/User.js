// models/User.js
export const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
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
