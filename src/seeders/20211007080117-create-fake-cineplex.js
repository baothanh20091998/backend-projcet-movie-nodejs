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
      "cineplexes",
      [
        {
          id: "1",
          name: "CGV",
          logo: "logoCGV",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "2",
          name: "GLX",
          logo: "logoGLX",
          createdAt: "2021-08-26 10:00:10",
          updatedAt: "2021-08-26 10:00:10",
        },
        {
          id: "3",
          name: "BHD",
          logo: "logoBHD",
          createdAt: "2021-08-27 10:00:10",
          updatedAt: "2021-08-27 10:00:10",
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
    await queryInterface.bulkDelete("cineplexes", null, {});
  },
};
