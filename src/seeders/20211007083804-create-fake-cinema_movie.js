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
      "cinema_movies",
      [
        {
          id: "1",
          cinemaid: "1",
          movieid: "1",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "2",
          cinemaid: "1",
          movieid: "2",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "3",
          cinemaid: "2",
          movieid: "1",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "4",
          cinemaid: "3",
          movieid: "3",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "5",
          cinemaid: "2",
          movieid: "3",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "6",
          cinemaid: "3",
          movieid: "2",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "7",
          cinemaid: "1",
          movieid: "3",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          cinemaid: "4",
          movieid: "2",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          cinemaid: "5",
          movieid: "3",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          cinemaid: "6",
          movieid: "1",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          cinemaid: "7",
          movieid: "2",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          cinemaid: "7",
          movieid: "3",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          cinemaid: "8",
          movieid: "1",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          cinemaid: "8",
          movieid: "2",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          cinemaid: "8",
          movieid: "3",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
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
    await queryInterface.bulkDelete("cinema_movies", null, {});
  },
};
