import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const ForuModel = sequelize.define(
  "forum",
  {
    tittle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);
