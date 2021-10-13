"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cinema_movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cinema, Movie, showtime }) {
      // define association here
      this.belongsTo(cinema, { foreignKey: "cinemaid" });
      this.belongsTo(Movie, { foreignKey: "movieid" });
      this.hasMany(showtime, { foreignKey: "cinema_movieId" });
    }
  }
  cinema_movie.init(
    {
      cinemaid: DataTypes.INTEGER,
      movieid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cinema_movie",
    }
  );
  return cinema_movie;
};
