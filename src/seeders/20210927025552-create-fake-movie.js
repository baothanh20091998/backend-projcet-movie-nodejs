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
      "Movies",
      [
        {
          id: "1",
          name: "Boruto",
          trailer: "zxczxcv",
          poster: "Bzxc",
          description: "Boruto Film",
          startTime: "2021-09-28 10:00:10",
          evaluate: "10",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "2",
          name: "Naruto",
          trailer: "zcvxzcv",
          poster: "Ok",
          description: "Naruto Film",
          startTime: "2021-10-30 20:00:20",
          evaluate: "10",
          createdAt: "2021-08-26 15:00:15",
          updatedAt: "2021-08-26 15:00:15",
        },
        {
          id: "3",
          name: "One Piece",
          trailer: "zcvxzcv",
          poster: "Ok",
          description: "One Piece Film",
          startTime: "2021-10-30 20:00:20",
          evaluate: "10",
          createdAt: "2021-08-26 15:00:15",
          updatedAt: "2021-08-26 15:00:15",
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
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
