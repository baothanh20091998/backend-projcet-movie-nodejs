"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          id: "1",
          userId: "1",
          movieId: "1",
          createdAt: "2021-08-26 15:00:15",
          updatedAt: "2021-08-26 15:00:15",
        },
        {
          id: "2",
          userId: "1",
          movieId: "2",
          createdAt: "2021-08-28 15:00:15",
          updatedAt: "2021-08-28 15:00:15",
        },
        {
          id: "3",
          userId: "2",
          movieId: "1",
          createdAt: "2021-08-29 15:00:15",
          updatedAt: "2021-08-29 15:00:15",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Tickets", null, {});
  },
};
