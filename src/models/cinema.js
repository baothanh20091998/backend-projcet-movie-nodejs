"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cinema_movie }) {
      // define association here
      this.hasMany(cinema_movie, { foreignKey: "cinemaid" });
    }
  }
  cinema.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.STRING,
      cineplexid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cinema",
    }
  );
  return cinema;
};
