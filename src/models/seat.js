"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ showtime, Ticket }) {
      // define association here
      this.belongsTo(showtime, { foreignKey: "showtimeId" });
      this.belongsTo(Ticket, { foreignKey: "ticketId" });
    }
  }
  seat.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      ticketId: DataTypes.INTEGER,
      type: DataTypes.STRING,
      showtimeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "seat",
    }
  );
  return seat;
};
