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
      "seats",
      [
        //showtime1
        {
          id: "1",
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "2",
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "3",
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "4",
          name: "F4",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "5",
          name: "F5",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "6",
          name: "F6",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "7",
          name: "F7",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "8",
          name: "F8",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "9",
          name: "F9",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "10",
          name: "F10",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "1",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime2
        {
          id: "11",
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "12",
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "13",
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "14",
          name: "F4",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "15",
          name: "F5",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "16",
          name: "F6",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "17",
          name: "F7",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "18",
          name: "F8",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "19",
          name: "F9",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "20",
          name: "F10",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "2",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime3
        {
          id: "21",
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "22",
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "23",
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "24",
          name: "F4",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "25",
          name: "F5",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "26",
          name: "F6",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "27",
          name: "F7",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "28",
          name: "F8",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "29",
          name: "F9",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "30",
          name: "F10",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "3",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime4
        {
          id: "31",
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "32",
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "33",
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "34",
          name: "F4",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "35",
          name: "F5",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "36",
          name: "F6",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "37",
          name: "F7",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "38",
          name: "F8",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "39",
          name: "F9",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "40",
          name: "F10",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "4",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime5
        {
          id: "51",
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "52",
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "53",
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "54",
          name: "F4",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "55",
          name: "F5",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "56",
          name: "F6",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "57",
          name: "F7",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "58",
          name: "F8",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "59",
          name: "F9",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          id: "60",
          name: "F10",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "5",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime6
        {
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F4",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F6",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F7",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F8",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F9",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F10",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "6",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime7
        {
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F4",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F6",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F7",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F8",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F9",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F10",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "7",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime8
        {
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F4",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F6",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F7",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F8",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F9",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F10",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "8",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime9
        {
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "9",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "9",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime10
        {
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "10",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "10",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime11
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "11",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "11",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime12
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "12",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "12",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime13
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "13",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F3",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "13",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime14
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "14",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "14",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime15
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "15",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "15",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //showtime16
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "16",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "16",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //17
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "17",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "17",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //18
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "18",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "18",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //19
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "19",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "19",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //20
        {
          name: "F7",
          status: false,
          price: "95000",
          type: "VIP",
          showtimeId: "20",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F8",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "20",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //21
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "21",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "21",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //22
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "22",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F5",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "22",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        //23
        {
          name: "F1",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "23",
          createdAt: "2021-10-02 15:00:15",
          updatedAt: "2021-10-02 15:00:15",
        },
        {
          name: "F2",
          status: false,
          price: "95000",
          type: "NORMAL",
          showtimeId: "23",
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
     *
     */
    await queryInterface.bulkDelete("seats", null, {});
  },
};