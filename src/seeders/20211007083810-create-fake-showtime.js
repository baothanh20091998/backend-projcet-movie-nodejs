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
      "showtimes",
      [
        {
          id: "1",
          startTime: "2021-09-30 15:00:15",
          cinema_movieId: "1",
          createdAt: "2021-08-26 15:00:15",
          updatedAt: "2021-08-26 15:00:15",
        },
        {
          id: "2",
          startTime: "2021-10-01 15:00:15",
          cinema_movieId: "1",
          createdAt: "2021-08-26 15:00:15",
          updatedAt: "2021-08-26 15:00:15",
        },
        {
          id: "3",
          startTime: "2021-10-02 15:00:15",
          cinema_movieId: "1",
          createdAt: "2021-08-26 15:00:15",
          updatedAt: "2021-08-26 15:00:15",
        },
        {
          id: "4",
          startTime: "2021-10-03 15:00:15",
          cinema_movieId: "2",
          createdAt: "2021-08-25 15:00:15",
          updatedAt: "2021-08-25 15:00:15",
        },
        {
          id: "5",
          startTime: "2021-10-05 15:00:15",
          cinema_movieId: "2",
          createdAt: "2021-08-24 15:00:15",
          updatedAt: "2021-08-24 15:00:15",
        },
        {
          id: "6",
          startTime: "2021-10-10 15:00:15",
          cinema_movieId: "3",
          createdAt: "2021-08-23 15:00:15",
          updatedAt: "2021-08-23 15:00:15",
        },
        {
          id: "7",
          startTime: "2021-09-21 15:00:15",
          cinema_movieId: "4",
          createdAt: "2021-09-21 15:00:15",
          updatedAt: "2021-09-21 15:00:15",
        },
        {
          id: "8",
          startTime: "2021-09-18 15:00:15",
          cinema_movieId: "4",
          createdAt: "2021-09-18 15:00:15",
          updatedAt: "2021-09-18 15:00:15",
        },
        {
          id: "9",
          startTime: "2021-10-11 15:00:15",
          cinema_movieId: "5",
          createdAt: "2021-10-11 15:00:15",
          updatedAt: "2021-10-11 15:00:15",
        },
        {
          id: "10",
          startTime: "2021-10-12 15:00:15",
          cinema_movieId: "5",
          createdAt: "2021-10-12 15:00:15",
          updatedAt: "2021-10-12 15:00:15",
        },
        {
          id: "11",
          startTime: "2021-10-02 15:00:15",
          cinema_movieId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "12",
          startTime: "2021-09-18 15:00:15",
          cinema_movieId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "13",
          startTime: "2021-09-16 15:00:15",
          cinema_movieId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "14",
          startTime: "2021-09-18 15:00:15",
          cinema_movieId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "15",
          startTime: "2021-10-21 15:00:15",
          cinema_movieId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "16",
          startTime: "2021-10-22 15:00:15",
          cinema_movieId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "17",
          startTime: "2021-10-28 15:00:15",
          cinema_movieId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "18",
          startTime: "2021-10-14 15:00:15",
          cinema_movieId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "19",
          startTime: "2021-10-14 15:00:15",
          cinema_movieId: "9",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "20",
          startTime: "2021-10-10 15:00:15",
          cinema_movieId: "10",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "21",
          startTime: "2021-08-12 15:00:15",
          cinema_movieId: "11",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "22",
          startTime: "2021-08-12 15:00:15",
          cinema_movieId: "12",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "23",
          startTime: "2021-08-15 15:00:15",
          cinema_movieId: "12",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
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
    await queryInterface.bulkDelete("showtimes", null, {});
  },
};
