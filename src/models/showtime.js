"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class showtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ seat, cinema_movie }) {
      // define association here
      this.hasMany(seat, { foreignKey: "showtimeId" });
      this.belongsTo(cinema_movie, { foreignKey: "cinema_movieId" });
    }
  }
  showtime.init(
    {
      startTime: DataTypes.DATE,
      cinema_movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "showtime",
    }
  );
  return showtime;
};
